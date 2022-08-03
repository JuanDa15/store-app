import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './pages/products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ProductsListComponent
      },
      {
        path: '**',
        redirectTo: '/products/list'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
