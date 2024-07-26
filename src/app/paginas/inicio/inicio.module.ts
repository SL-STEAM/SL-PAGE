import { ModalComponent } from './../../modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        InicioRoutingModule,
        ReactiveFormsModule,
        InicioComponent,
        ModalComponent
    ]
})
export class InicioModule { }
