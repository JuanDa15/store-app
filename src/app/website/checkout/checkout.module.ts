import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CartDetailComponent } from './pages/cart-detail/cart-detail.component';
import { CartProductPreviewComponent } from './components/cart-product-preview/cart-product-preview.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrimengModule } from 'src/app/primeng/primeng.module';
import { ProductsModule } from '../products/products.module';


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
