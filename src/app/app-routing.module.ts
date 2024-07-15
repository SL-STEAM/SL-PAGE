import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  { path: 'nosotros', loadChildren: () => import('./paginas/inicio/inicio.module').then(m => m.InicioModule) },
  { path: 'modelos', loadChildren: () => import('./paginas/modelos/modelos.module').then(m => m.ModelosModule) },
  { path: 'soluciones', loadChildren: () => import('./paginas/soluciones/soluciones.module').then(m => m.SolucionesModule) },
  { path: 'blog', loadChildren: () => import('./paginas/blog/blog.module').then(m => m.BlogModule) },
  { path: 'blog-card', loadChildren: () => import('./paginas/blog-card/blog-card.module').then(m => m.BlogCardModule) },
  { path: 'discovery', loadChildren: () => import('./paginas/discovery/discovery.module').then(m => m.DiscoveryModule) },
  { path: 'cultura-x', loadChildren: () => import('./paginas/cultura-x/cultura-x.module').then(m => m.CulturaXModule) },
  { path: 'business-s', loadChildren: () => import('./paginas/business-s/business-s.module').then(m => m.BusinessSModule) },
  { path: '', redirectTo: '/nosotros', pathMatch: 'full' },
  { path: '**', redirectTo: '/nosotros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
