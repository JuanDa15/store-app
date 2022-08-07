import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { QuantityManagerComponent } from './components/quantity-manager/quantity-manager.component';
import { FormsModule } from '@angular/forms';
import { ProductsQuantityLimiterDirective } from './directives/products-quantity-limiter.directive';
import { PrimengModule } from '../primeng/primeng.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    QuantityManagerComponent,
    ProductsQuantityLimiterDirective
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    PrimengModule
  ],
  exports: [
    QuantityManagerComponent
  ]
})
export class ProductsModule { }
