import { Component, OnInit } from '@angular/core';
import Aos from 'aos';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common'; // Importa NgIf

@Component({
    selector: 'app-cultura-x',
    templateUrl: './cultura-x.component.html',
    styleUrls: ['./cultura-x.component.scss'],
    standalone: true,
    imports: [RouterLink, NgIf] // Agrega NgIf a la lista de imports
})
export class CulturaXComponent implements OnInit {
  isPopup1Visible = false;
  isPopup2Visible = false;

  ngOnInit() {
    Aos.init({
      offset: 200, // La distancia al viewport en que la animación debe comenzar
      duration: 1000, // La duración de la animación en milisegundos
      easing: 'ease', // La curva de aceleración de la animación
      once: false, // Si la animación debe ocurrir solo una vez
      mirror: true // Si la animación debe ocurrir en el scroll de retroceso
    });
    window.addEventListener('load', Aos.refresh);

        // Desplaza la vista al inicio cuando se carga el componente
        window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openPopup(popupNumber: number) {
    if (popupNumber === 1) {
      this.isPopup1Visible = true;
    } else if (popupNumber === 2) {
      this.isPopup2Visible = true;
    }
  }

  closePopup(popupNumber: number) {
    if (popupNumber === 1) {
      this.isPopup1Visible = false;
    } else if (popupNumber === 2) {
      this.isPopup2Visible = false;
    }
  }
}
