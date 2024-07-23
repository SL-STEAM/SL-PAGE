import { Component, OnInit } from '@angular/core';
import { ModalContentService } from '../compartido/servicios/modal-content.service';
import { AsyncPipe } from '@angular/common';


@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.css'],
    standalone: true,
    imports: [AsyncPipe]
})
export class ModalComponent implements OnInit {

  constructor(public modalContentService: ModalContentService) { }

  ngOnInit(): void {
  }

}
