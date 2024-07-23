
import { Routes } from '@angular/router';

export const routes: Routes = [ 
    { 
        path: 'nosotros', 
        loadChildren: () => import('./paginas/inicio/inicio.routes').then(m => m.routes), 
    },
    { 
        path: 'modelos', 
        loadChildren: () => import('./paginas/modelos/modelos.routes').then(m => m.routes), 
    },
    { 
        path: 'soluciones', 
        loadChildren: () => import('./paginas/soluciones/soluciones.routes').then(m => m.routes), 
    },
    { 
        path: 'blog', 
        loadChildren: () => import('./paginas/blog/blog.routes').then(m => m.routes),
    },
    { 
        path: 'blog-card', 
        loadChildren: () => import('./paginas/blog-card/blog-card.routes').then(m => m.routes), 
    },
    { 
        path: 'discovery', 
        loadChildren: () => import('./paginas/discovery/discovery.routes').then(m => m.routes), 
    },
    { 
        path: 'cultura-x', 
        loadChildren: () => import('./paginas/cultura-x/cultura-x.routes').then(m => m.routes), 
    },
    { 
        path: 'business-s', 
        loadChildren: () => import('./paginas/business-s/business-s.routes').then(m => m.routes), 
    },
    { 
        path: '', 
        redirectTo: '/nosotros', 
        pathMatch: 'full' 
    },
    { 
        path: '**', 
        redirectTo: '/nosotros', 
        pathMatch: 'full' 
    }
  ];