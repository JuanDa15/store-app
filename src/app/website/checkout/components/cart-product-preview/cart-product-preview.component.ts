import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/website/products/interface/product.interface';

@Component({
  selector: 'cart-product-preview',
  templateUrl: './cart-product-preview.component.html',
  styleUrls: ['./cart-product-preview.component.scss']
})
export class CartProductPreviewComponent {

  @Input() product!: Product;

  constructor() { }

}
