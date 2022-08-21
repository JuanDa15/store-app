import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { QuantityManagerComponent } from './components/quantity-manager/quantity-manager.component';
import { FormsModule } from '@angular/forms';
import { ProductsQuantityLimiterDirective } from './directives/products-quantity-limiter.directive';
import { DetailedProductComponent } from './components/detailed-product/detailed-product.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { SwiperModule } from 'swiper/angular';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { LayoutComponent } from './pages/layout/layout.component'
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    ProductsListComponent,
    ProductCardComponent,
    QuantityManagerComponent,
    ProductsQuantityLimiterDirective,
    DetailedProductComponent,
    CategoriesComponent,
    ProductListComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    PrimengModule,
    ScrollingModule,
    SwiperModule,
    SharedModule
  ],
  exports: [
    QuantityManagerComponent
  ]
})
export class ProductsModule { }
