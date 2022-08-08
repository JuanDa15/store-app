import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/auth/interfaces/cart-item.interface';
import { Product } from 'src/app/products/interface/product.interface';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform:'translateX(0)'})),
      state('closed', style({ transform:'translateX(100%)' })),
      transition('closed => open', [ animate('.3s') ]),
      transition('open => closed', [ animate('.3s') ]),
    ]),
  ]
})
export class ProductsListComponent implements OnInit {

  private cartServiceInstance: CartService;
  public cartList: CartItem[];
  public selectedProduct: number | undefined;
  public products: Product[];

  constructor(private _productService: ProductService) {
    this.products = [];
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
    this.selectedProduct = undefined;
  }

  ngOnInit(): void {
    this._fetchProducts();
  }

  private _fetchProducts(): void {
    this._productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      }
    })
  }

  public onAddToCart( product: Product): void {
    this.cartServiceInstance.addToCart(product);
  }

  public openDetail( productID: number): void {
    (this.selectedProduct === productID)
      ? this.selectedProduct = undefined
      : this.selectedProduct = productID;
  }

  public closeDetailed(): void {
    this.selectedProduct = undefined;
  }
}
