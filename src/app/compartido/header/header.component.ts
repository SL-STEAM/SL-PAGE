
import { Component, HostListener, Inject, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  scrolled: boolean = true;
  lastScroll: number = 0;
  now: number = 0;


  ocultar = 0;
  mostarminibanner: boolean = false;

  isUnderlined: boolean = false;
  isUnderlinedModel: boolean = false;
  isUnderlinedSoluciones: boolean = false;
  isUnderlinedBlog: boolean = false;

  toggleUnderline() {
    this.isUnderlined = true;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineOff() {
    if (!this.isUnderlinedModel && !this.isUnderlinedSoluciones && !this.isUnderlinedBlog) {
      this.isUnderlined = false;
    }
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineModel() {
    this.isUnderlinedModel = true;
    this.isUnderlined = false;
    this.isUnderlinedSoluciones = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineSoluciones() {
    this.isUnderlinedSoluciones = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedBlog = false;
  }

  toggleUnderlineBlog() {
    this.isUnderlinedBlog = true;
    this.isUnderlined = false;
    this.isUnderlinedModel = false;
    this.isUnderlinedSoluciones = false;
  }




}
