import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/products/interface/product.interface';

@Component({
  selector: 'cart-product-preview',
  templateUrl: './cart-product-preview.component.html',
  styleUrls: ['./cart-product-preview.component.scss']
})
export class CartProductPreviewComponent implements OnInit {

  @Input() product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
