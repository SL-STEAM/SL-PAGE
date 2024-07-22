import { CarruselService } from '../../compartido/servicios/carrusel.service';
import { FormBuilder } from '@angular/forms';
import { Component, ElementRef, HostListener, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { iif, timer } from 'rxjs';

import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ModelosComponent implements OnInit {
  
  @ViewChild('videoElement', { static: false }) videoElement?: ElementRef;
  @ViewChild('playButton', { static: false }) playButton?: ElementRef;
  @ViewChild('contactFormSection') contactFormSection?: ElementRef;
  @ViewChild('contactFormSection2') contactFormSection2?: ElementRef;


  scrollToForm() {
    if (this.contactFormSection) {
      this.contactFormSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (this.contactFormSection2) {
      this.contactFormSection2.nativeElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  muted: boolean = true; // el video inicie silenciado

  espacioRojo: boolean = true;

  instagram: boolean = true;
  instagramColor: boolean = false;

  arquetipos: boolean = true;
  arquetiposColor: boolean = false;

  email: boolean = true;
  emailColor: boolean = false;

  facebook: boolean = true;
  facebookColor: boolean = false;

  whatsapp: boolean = true;
  whatsappColor: boolean = false;

  link: boolean = true;
  linkColor: boolean = false;

  marginTopDiv: string = '30px';


  constructor(private elRef: ElementRef, private sanitizer: DomSanitizer, private router: Router, private formBuilder: FormBuilder){

  }



  cambiarA(){
    this.arquetipos = false;
    this.arquetiposColor = true;
  }

  toggleMute() {
    this.muted = !this.muted;
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
  
  cambiarF(){
    this.facebook = false;
    this.facebookColor = true;
  }

  cambiarW(){
    this.whatsapp = false;
    this.whatsappColor = true;
  }

  cambiarWBlanco(){
    this.whatsapp = true;
    this.whatsappColor = false;
  }


  cambiarFBlanco(){
    this.facebook = true;
    this.facebookColor = false;
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

  ngOnInit(): void {   

  }

}