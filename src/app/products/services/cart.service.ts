import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private static instance: CartService = new CartService();

  private _cartList: Product[];

  private constructor() {
    this._cartList = [];
  }

  /**
   * [getInstance]
   *  method that creates the instance or returns
   *  the existing instance
   * @return  {Singleton}  [class instance]
   */
    public static getInstance(): CartService {
    if ( !CartService.instance ) {
      CartService.instance = new CartService();
    }
    return CartService.instance;
  }


  get cartList(): Product[] {
    return [...this._cartList];
  }

  set cartList( list: Product[]) {
    this._cartList = list;
  }

  get totalPrice(): number {
    return this._cartList.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  public addToCart(product: Product): void {
    let productPosition = this._findProductInCart( product.id );

    if ( productPosition === -1) {
      this._cartList.push({
        ...product,
        quantity: 1
      });
    } else {
      this._cartList[productPosition].quantity += 1;
    }
  }

  public updateItemQuantity( quantity: number, productID: number): void {
    const productPosition = this._findProductInCart(productID);

    ( productPosition !== -1 ) &&
      (this._cartList[productPosition].quantity = quantity);
  }

  private _findProductInCart( productID: number ): number {
    return this.cartList.findIndex(cartItem => cartItem.id === productID);
  }

  public removeFromCart(product: Product): void {
    const itemPosition = this._findProductInCart( product.id );
    (itemPosition !== -1 ) &&
      this._cartList.splice(itemPosition, 1);
  }
}
