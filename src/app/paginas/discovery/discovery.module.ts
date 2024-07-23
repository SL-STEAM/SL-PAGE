import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoveryComponent } from './discovery.component';
import { DiscoveryRoutingModule } from './discovery-routing.module';

@NgModule({
    imports: [
        CommonModule,
        DiscoveryRoutingModule,
        DiscoveryComponent
    ]
})
export class DiscoveryModule { }
