import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CulturaXComponent } from './cultura-x.component';

const routes: Routes = [{ path: '', component: CulturaXComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CulturaXRoutingModule { }
