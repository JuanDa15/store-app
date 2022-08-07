import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/auth/interfaces/cart-item.interface';
import { Product } from 'src/app/products/interface/product.interface';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  public cartList: CartItem[];
  private cartServiceInstance: CartService;

  products: Product[];
  constructor(private _productService: ProductService) {
    this.products = [];
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
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
}
