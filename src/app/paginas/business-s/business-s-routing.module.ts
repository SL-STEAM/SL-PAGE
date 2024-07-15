import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessSComponent } from './business-s.component';

const routes: Routes = [{ path: '', component: BusinessSComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessSRoutingModule { }
