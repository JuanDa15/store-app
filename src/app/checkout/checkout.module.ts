import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { ProductsModule } from '../products/products.module';
import { SharedModule } from '../shared/shared.module';
import { CartProductPreviewComponent } from './components/cart-product-preview/cart-product-preview.component';
import { PrimengModule } from '../primeng/primeng.module';


@NgModule({
  declarations: [
    CartDetailComponent,
    CartProductPreviewComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ProductsModule,
    SharedModule,
    PrimengModule
  ]
})
export class CheckoutModule { }
