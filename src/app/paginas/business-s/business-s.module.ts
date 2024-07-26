import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessSComponent } from './business-s.component';
import { BusinessSRoutingModule } from './business-s-routing.module';

@NgModule({
    imports: [
        CommonModule,
        BusinessSRoutingModule,
        BusinessSComponent
    ]
})
export class BusinessSModule { }
