import { CarruselService } from './../../compartido/servicios/carrusel.service';

import { FormBuilder } from '@angular/forms';
import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import lottie from 'lottie-web';
import { ViewportScroller } from '@angular/common';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class InicioComponent implements OnInit {

  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;



  botonEmpresasBlanco: boolean = true;
  botonEmpresasRojo: boolean = false;
  botonEmprendimientosBlanco: boolean = true;
  botonEmprendimientosRojo: boolean = false;
  infoEmprendimientos: boolean = false;
  infoEmpresas: boolean = false;
  espacioRojo: boolean = true;

  instagram: boolean = true;
  instagramColor: boolean = false;

  whatsapp: boolean = true;
  whatsappColor: boolean = false;

  arquetipos: boolean = true;
  arquetiposColor: boolean = false;

  email: boolean = true;
  emailColor: boolean = false;

  facebook: boolean = true;
  facebookColor: boolean = false;

  link: boolean = true;
  linkColor: boolean = false;

  cartaPantalla: boolean = true;
  cartaTuerca: boolean = true;
  cartaCabeza: boolean = true;


  marginTopDiv: string = '30px';

  @ViewChild('colombia') colombia!: ElementRef;

  @ViewChild('flechasAnal') flechasAnal!: ElementRef;

  @ViewChild('manoTuerca') manoTuerca!: ElementRef;

  @ViewChild('tituloPuente') tituloPuente!: ElementRef;

  @ViewChild('textoPuente') textoPuente!: ElementRef;


  @ViewChild('ojoAnal') ojoAnal!: ElementRef;

  @ViewChild('banner') banner!: ElementRef;
  @ViewChild('mexico') mexico!: ElementRef;

  @ViewChild('ecuador') ecuador!: ElementRef;

  @ViewChild('peru') peru!: ElementRef;
  @ViewChild('chile') chile!: ElementRef;
  @ViewChild('argentina') argentina!: ElementRef;
  @ViewChild('dominicana') dominicana!: ElementRef;
  @ViewChild('guatemala') guatemala!: ElementRef;
  @ViewChild('salvador') salvador!: ElementRef;
  @ViewChild('panama') panama!: ElementRef;
  @ViewChild('honduras') honduras!: ElementRef;
  @ViewChild('brasil') brasil!: ElementRef;

  @ViewChild('Crea') Crea!: ElementRef;

  @ViewChild('perpis') perpis!: ElementRef;
  @ViewChild('dina') dina!: ElementRef;
  @ViewChild('crea') crea!: ElementRef;
  @ViewChild('arriesga') arriesga!: ElementRef;
  @ViewChild('provo') provo!: ElementRef;

  botonPerpis: boolean = true;
  botonDina: boolean = true;
  botonCrea: boolean = true;
  botonArriesga: boolean = true;
  botonProvo: boolean = true;

  flechaCerrada: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechas: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlecha: number = 0;

  flechaCerradaDina: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasDina: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaDina: number = 0;

  flechaCerradaCrea: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasCrea: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaCrea: number = 0;

  flechaCerradaArriesga: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasArriesga: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaArriesga: number = 0;

  flechaCerradaProvo: String = "assets/imagenes/imaFichas/flechaArriba.svg"

  flechasProvo: string[] = ['assets/imagenes/imaFichas/flechaArriba.svg', 'assets/imagenes/imaFichas/flechaAbajo.svg'];

  indiceFlechaProvo: number = 0;

  // animationContainerComillas: HTMLElement | null = null;



  constructor(private viewportScroller: ViewportScroller, private sanitizer: DomSanitizer, private carruselSVC: CarruselService, private router: Router, private formBuilder: FormBuilder){

  }


  displayPerpis(){

    this.indiceFlecha = (this.indiceFlecha + 1) % this.flechas.length;
    this.flechaCerrada = this.flechas[this.indiceFlecha];

    if (this.perpis) {

      if(this.botonPerpis){
        this.perpis.nativeElement.style.display = 'block';
        this.botonPerpis = false;
      } else {
        this.perpis.nativeElement.style.display = 'none';
        this.botonPerpis = true;
      }


    }
  }

  displayDina(){

    this.indiceFlechaDina = (this.indiceFlechaDina + 1) % this.flechasDina.length;
    console.log(this.flechasDina.length);
    
    this.flechaCerradaDina = this.flechasDina[this.indiceFlechaDina];

    if (this.dina) {

      if(this.botonDina){
        this.dina.nativeElement.style.display = 'block';
        this.botonDina = false;
      } else {
        this.dina.nativeElement.style.display = 'none';
        this.botonDina = true;
      }


    }
  }

  displayCrea(){

    this.indiceFlechaCrea = (this.indiceFlechaCrea + 1) % this.flechasCrea.length;
    this.flechaCerradaCrea = this.flechasCrea[this.indiceFlechaCrea];

    if (this.crea) {

      if(this.botonCrea){
        this.crea.nativeElement.style.display = 'block';
        this.botonCrea = false;
      } else {
        this.crea.nativeElement.style.display = 'none';
        this.botonCrea = true;
      }


    }
  }

  displayArriesga(){
    this.indiceFlechaArriesga = (this.indiceFlechaArriesga + 1) % this.flechasArriesga.length;
    this.flechaCerradaArriesga = this.flechasArriesga[this.indiceFlechaArriesga];
    if (this.arriesga) {

      if(this.botonArriesga){
        this.arriesga.nativeElement.style.display = 'block';
        this.botonArriesga = false;
      } else {
        this.arriesga.nativeElement.style.display = 'none';
        this.botonArriesga = true;
      }


    }
  }

  displayProvo(){
    this.indiceFlechaProvo = (this.indiceFlechaProvo + 1) % this.flechasProvo.length;
    this.flechaCerradaProvo = this.flechasProvo[this.indiceFlechaProvo];
    if (this.provo) {

      if(this.botonProvo){
        this.provo.nativeElement.style.display = 'block';
        this.botonProvo = false;
      } else {
        this.provo.nativeElement.style.display = 'none';
        this.botonProvo = true;
      }


    }
  }

  cambiarW(){
    this.whatsapp = false;
    this.whatsappColor = true;
  }

  cambiarWBlanco(){
    this.whatsapp = true;
    this.whatsappColor = false;
  }

  cambiarF(){
    this.facebook = false;
    this.facebookColor = true;
  }

  cambiarFBlanco(){
    this.facebook = true;
    this.facebookColor = false;
  }

  cambiarA(){
    this.arquetipos = false;
    this.arquetiposColor = true;
  }

  cambiarABlanco(){
    this.arquetipos = true;
    this.arquetiposColor = false;
  }

  cambiarE(){
    this.email = false;
    this.emailColor = true;
  }

  cambiarEBlanco(){
    this.email = true;
    this.emailColor = false;
  }


  cambiarL(){
    this.link = false;
    this.linkColor = true;
  }

  cambiarLBlanco(){
    this.link = true;
    this.linkColor = false;
  }


  cambiarI(){
    this.instagram = false;
    this.instagramColor = true;
  }

  cambiarIBlanco(){
    this.instagram = true;
    this.instagramColor = false;
  }

  mostrarCabeza(){
    this.cartaCabeza = !this.cartaCabeza;
    this.cartaTuerca = true;
    this.cartaPantalla = true;
  }

  mostrarTuerca(){
    this.cartaTuerca = !this.cartaTuerca;
    this.cartaCabeza = true;
    this.cartaPantalla = true;
  }

  mostrarPantalla(){
    this.cartaPantalla = !this.cartaPantalla;
    this.cartaTuerca = true;
    this.cartaCabeza = true;
  }

  bloquearScroll(){
    document.body.style.overflowY = 'hidden';

}



  mostrarInfoEmpresas(){

    this.botonEmpresasBlanco = false;
    this.botonEmpresasRojo = true;
    this.infoEmpresas = true;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = false;
    } else {
      this.espacioRojo = true;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmpresas(){

    this.botonEmpresasBlanco = true;
    this.botonEmpresasRojo = false;
    this.infoEmpresas = false;

    if(this.botonEmprendimientosRojo){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }

    if(this.botonEmprendimientosRojo){
      this.marginTopDiv = '30px';
    } else {
      this.marginTopDiv = '226.5px';
    }
  }

  mostrarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = false;
    this.botonEmprendimientosRojo = true;
    this.infoEmprendimientos = true;

    if(this.botonEmpresasRojo == true){
      this.espacioRojo = false;
    } else  {
      this.espacioRojo = true;
    }

    if(this.botonEmpresasRojo){
      this.marginTopDiv = '226.5px';
    } else {
      this.marginTopDiv = '30px';
    }

  }

  ocultarInfoEmprendimientos(){

    this.botonEmprendimientosBlanco = true;
    this.botonEmprendimientosRojo = false;
    this.infoEmprendimientos = false;

    if(this.botonEmpresasRojo == false){
      this.espacioRojo = true;
    } else {
      this.espacioRojo = false;
    }
  }

  scrollToSection(){
    const sectionToScrollTo = document.getElementById('contacts');

    if (sectionToScrollTo) {
      const offset = sectionToScrollTo.getBoundingClientRect().top; // Calcula la posición del elemento respecto a la parte superior de la ventana
      const duration = 300; // Duración del desplazamiento en milisegundos
      const start = this.viewportScroller.getScrollPosition(); // Posición de inicio

      let startTime: number;

      // Función de animación para realizar el desplazamiento suave
      const animateScroll = (timestamp: number) => {
        startTime = startTime || timestamp;
        const progress = timestamp - startTime;
        const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        this.viewportScroller.scrollToPosition([start[0], easeInOutQuad(progress / duration) * offset + start[1]]);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  ngOnInit(): void {


    window.scrollTo(0, 0);

    const animationContainer = document.getElementById('cerebro');

    if (animationContainer) {
      const animation1 = lottie.loadAnimation({ container: animationContainer, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/cerebrito.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainerOnda = document.getElementById('ondaGris');

    if (animationContainerOnda) {
      const animation1 = lottie.loadAnimation({ container: animationContainerOnda, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/OndaColores.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer2 = document.getElementById('ojo');

    if (animationContainer2) {
      const animation2 = lottie.loadAnimation({ container: animationContainer2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/ojos.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer3 = document.getElementById('flecha');

    if (animationContainer3) {
      const animation3 = lottie.loadAnimation({ container: animationContainer3, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/flecha.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });
    }

    const animationContainer22 = document.getElementById('invisub');

    if (animationContainer22) {
      const animation22 = lottie.loadAnimation({ container: animationContainer22, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/invisub.json' });
      animation22.addEventListener('DOMLoaded', () => {
      });


    animation22.setSpeed(0.8);
    }

    const animationContainer2222 = document.getElementById('tx');

    if (animationContainer2222) {

      timer(5400).subscribe(() => {

      const animation63 = lottie.loadAnimation({ container: animationContainer2222, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/tx.json' });

    animation63.addEventListener('DOMLoaded', () => {
    });

    animation63.setSpeed(0.5);

    });





    }



    const animationContainer3000 = document.getElementById('creativos');

    if (animationContainer3000) {
      const animation300 = lottie.loadAnimation({ container: animationContainer3000, renderer: 'svg', loop: true, autoplay: true, path: 'assets/imagenes/imaFichas/Crea.svg' });
      animation300.addEventListener('DOMLoaded', () => {
      });

      animation300.setSpeed(0.3);
    }

    const animationContainer111 = document.getElementById('perspicaces');

    if (animationContainer111) {
      const animation1 = lottie.loadAnimation({ container: animationContainer111, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Medio/perpi.json' });
      animation1.addEventListener('DOMLoaded', () => {
      });

      animation1.setSpeed(9);
    }

    const animationContainer222 = document.getElementById('posit');

    if (animationContainer222) {
      const animation2 = lottie.loadAnimation({ container: animationContainer222, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/posit.json' });
      animation2.addEventListener('DOMLoaded', () => {
      });

      animation2.setSpeed(0.3);
    }

    const animationArriesga = document.getElementById('arriesga');

    if (animationArriesga) {
      const animation3 = lottie.loadAnimation({ container: animationArriesga, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/arriesgados.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationProvocadores = document.getElementById('provocador');

    if (animationProvocadores) {
      const animation3 = lottie.loadAnimation({ container: animationProvocadores, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/provocadores.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationContainer333 = document.getElementById('perpis');

    if (animationContainer333) {
      const animation3 = lottie.loadAnimation({ container: animationContainer333, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/Medio/perpis.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(9);
    }

    const animationContainerActivacion = document.getElementById('activacion');

    if (animationContainerActivacion) {
      const animation3 = lottie.loadAnimation({ container: animationContainerActivacion, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/medio2/activacion.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationContainerComprension = document.getElementById('comprension');

    if (animationContainerComprension) {
      const animation3 = lottie.loadAnimation({ container: animationContainerComprension, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/medio2/comprension.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationContainerCreatividad = document.getElementById('creatividad');

    if (animationContainerCreatividad) {
      const animation3 = lottie.loadAnimation({ container: animationContainerCreatividad, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/medio2/creatividad.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationContainerLogistica = document.getElementById('logistica');

    if (animationContainerLogistica) {
      const animation3 = lottie.loadAnimation({ container: animationContainerLogistica, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/medio2/logistica.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }

    const animationContainerSteam = document.getElementById('steam');

    if (animationContainerSteam) {
      const animation3 = lottie.loadAnimation({ container: animationContainerSteam, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Medio/medio2/steam.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.3);
    }


    const animationContainerCrea = document.getElementById('crea');

    if (animationContainerCrea) {
      const animation3 = lottie.loadAnimation({ container: animationContainerCrea, renderer: 'svg', loop: false, autoplay: false, path: 'assets/json/Medio/crea.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      // animation3.setSpeed(0.3);
    }


    const animationCerebro2 = document.getElementById('cerebro2');

    if (animationCerebro2) {
      const animation3 = lottie.loadAnimation({ container: animationCerebro2, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/cerebro2.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }


    const animationPluma = document.getElementById('pluma');

    if (animationPluma) {
      const animation3 = lottie.loadAnimation({ container: animationPluma, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/Iconosinicio/pluma.json' });
      animation3.addEventListener('DOMLoaded', () => {
      });

      animation3.setSpeed(0.4);
    }


    const animationComillas = document.getElementById('comillas2');

    if (animationComillas) {
      const animations = lottie.loadAnimation({ container: animationComillas, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/comillas2.json' });
      animations.addEventListener('DOMLoaded', () => {
      });
    }


  }


  banderaLinea1 = true;

  banderaLinea2 = true;

  banderaLinea3 = true;

  banderaLinea4 = true;

  banderaLineaInit = true;

  banderaLineaInitC= true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
        // Obtener la posición actual del scroll en el eje Y
        const scrollYPos = window.scrollY
        console.log(scrollYPos)

        if (scrollYPos < 1040){
          if (this.banner) {
            this.banner.nativeElement.style.display = 'none';
          }

        } else {
          if (this.banner) {
            this.banner.nativeElement.style.display = 'block';
          }
        }


        if(scrollYPos > 1050 && this.banderaLinea1 == true){

          this.banderaLinea1 = false;

          const animationContainer5 = document.getElementById('somos');

          if (animationContainer5) {
            const animation5 = lottie.loadAnimation({ container: animationContainer5, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/somos.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(0.27333);
          }

          const animationContainer6 = document.getElementById('lineaTexto2');

          if (animationContainer6) {
            const animation6 = lottie.loadAnimation({ container: animationContainer6, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation6.addEventListener('DOMLoaded', () => {
            });

            animation6.setSpeed(0.2);

          }


        }


        if(scrollYPos > 3220 && this.banderaLinea4 == true){

          this.banderaLinea4 = false;

          const animationContainerChico = document.getElementById('mancae1');

          if (animationContainerChico) {



            timer(0).subscribe(() => {

            const animation16 = lottie.loadAnimation({ container: animationContainerChico, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/mancae1.json' });
            animation16.addEventListener('DOMLoaded', () => {
            });

            animation16.setSpeed(0.1);

            if (this.panama) {
              this.panama.nativeElement.style.display = 'block';
            }

          });

          }
        }

        if(scrollYPos > 4008){

          if (this.flechasAnal) {
            this.flechasAnal.nativeElement.style.display = 'block';
          }

        }

        if(scrollYPos > 2200){

          if (this.tituloPuente) {
            this.tituloPuente.nativeElement.style.display = 'block';
          }

        }


        if(scrollYPos > 4220){

          if (this.ojoAnal) {
            this.ojoAnal.nativeElement.style.display = 'block';
          }

          if (this.manoTuerca) {
            this.manoTuerca.nativeElement.style.display = 'block';
          }

        }

        if(scrollYPos > 2080 && this.banderaLinea2 == true){

          this.banderaLinea2 = false;

          const animationcabezota = document.getElementById('cabezota');

          if (animationcabezota) {
            const animation5 = lottie.loadAnimation({ container: animationcabezota, renderer: 'svg', loop: false, autoplay: false, path: 'assets/json/cabezota2.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(1);
          }

          const animationbola1 = document.getElementById('bola1');

          if (animationbola1) {
            const animation5 = lottie.loadAnimation({ container: animationbola1, renderer: 'svg', loop: true, autoplay: true, path: 'assets/json/op1.json' });
            animation5.addEventListener('DOMLoaded', () => {
            });

            animation5.setSpeed(2);
          }



          const animationContainer7 = document.getElementById('lineaTexto3');

          if (animationContainer7) {
            const animation7 = lottie.loadAnimation({ container: animationContainer7, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation7.addEventListener('DOMLoaded', () => {
            });

            animation7.setSpeed(0.5);

          }

          const animationContainer9 = document.getElementById('lineaTexto5');

          if (animationContainer9) {
            const animation9 = lottie.loadAnimation({ container: animationContainer9, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation9.addEventListener('DOMLoaded', () => {
            });

            animation9.setSpeed(0.2);

          }

          const animationContainer8 = document.getElementById('lineaTexto4');

          if (animationContainer8) {
            const animation8 = lottie.loadAnimation({ container: animationContainer8, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineaTexto.json' });
            animation8.addEventListener('DOMLoaded', () => {
            });

            animation8.setSpeed(0.2);

          }
        }

        if(scrollYPos > 1100 && this.banderaLinea3 == true){

          this.banderaLinea3 = false;

          const animationContainer4 = document.getElementById('lineach');

    if (animationContainer4) {
      const animation4 = lottie.loadAnimation({ container: animationContainer4, renderer: 'svg', loop: false, autoplay: true, path: 'assets/json/lineapeque.json' });
      animation4.addEventListener('DOMLoaded', () => {
      });

      animation4.setSpeed(0.189999);

    }



    }

  }

}