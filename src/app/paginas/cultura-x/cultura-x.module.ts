import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CulturaXComponent } from './cultura-x.component';
import { CulturaXRoutingModule } from './cultura-x-routing.module';

@NgModule({
    imports: [
        CommonModule,
        CulturaXRoutingModule,
        CulturaXComponent
    ]
})
export class CulturaXModule { }
