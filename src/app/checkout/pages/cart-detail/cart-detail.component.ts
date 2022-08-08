import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CartItem } from 'src/app/auth/interfaces/cart-item.interface';
import { Product } from 'src/app/products/interface/product.interface';
import { CartService } from 'src/app/products/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart-detail',
  templateUrl: './cart-detail.component.html',
  styleUrls: ['./cart-detail.component.scss'],
  providers: [MessageService]
})
export class CartDetailComponent {

  public cartServiceInstance: CartService;

  public cartList: CartItem[];


  constructor(private messageService: MessageService) {
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
  }

  get totalPrice(): number {
    return this.cartServiceInstance.totalPrice;
  }

  public updateQuantity( quantity: number, productID: number): void {
    this.cartServiceInstance.updateItemQuantity(quantity, productID);
  }

  public removeFromCart( product: Product): void {
    this.cartServiceInstance.removeFromCart( product );
    this.cartList = this.cartServiceInstance.cartList;
    this.messageService.add({
      severity:'success',
      summary: 'Success',
      detail: `"${product.title}" removed from cart`
    });
  }

}
