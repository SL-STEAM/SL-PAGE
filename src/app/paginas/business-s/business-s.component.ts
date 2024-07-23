import { Component, OnInit } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-business-s',
  templateUrl: './business-s.component.html',
  styleUrls: ['./business-s.component.scss']
})
export class BusinessSComponent implements OnInit {
  isPopupVisible = false;

  ngOnInit() {
    Aos.init({
      offset: 200, // La distancia al viewport en que la animación debe comenzar
      duration: 1000, // La duración de la animación en milisegundos
      easing: 'ease', // La curva de aceleración de la animación
      once: false, // Si la animación debe ocurrir solo una vez
      mirror: true // Si la animación debe ocurrir en el scroll de retroceso
    });
    window.addEventListener('load', Aos.refresh);
  }

  openPopup() {
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }
}