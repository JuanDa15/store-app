import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { LayoutComponent } from './products/pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module')
          .then(m => m.AuthModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module')
          .then(m => m.ProductsModule),
        data: {
          preload: true
        }
      },
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module')
          .then(m => m.CheckoutModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
