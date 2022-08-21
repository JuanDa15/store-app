import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { CategoriesComponent } from './pages/categories/categories.component';
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
        path: 'category/:id',
        component: CategoriesComponent
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
export class ProductsRoutingModule { }
