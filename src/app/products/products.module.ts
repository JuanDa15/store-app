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
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SwiperModule } from 'swiper/angular';
import { CategoriesComponent } from './pages/categories/categories.component'

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    QuantityManagerComponent,
    ProductsQuantityLimiterDirective,
    DetailedProductComponent,
    CategoriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductsRoutingModule,
    FormsModule,
    PrimengModule,
    ScrollingModule,
    SwiperModule
  ],
  exports: [
    QuantityManagerComponent
  ]
})
export class ProductsModule { }
