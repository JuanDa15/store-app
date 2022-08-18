import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CartService } from 'src/app/products/services/cart.service';
import { TokenService } from 'src/app/utils/services/token.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _cartInstance: CartService;
  public activeMenu: boolean = false;
  public productsQuantity: number = 0;

  constructor(public authService: AuthService,
              public tokenService: TokenService) {
    this._cartInstance = CartService.getInstance();
  }

  ngOnInit(): void {
    this._cartInstance.myCart$.subscribe({
      next: (cartList) => {
        this.productsQuantity = cartList.reduce((sum, cart) => sum + cart.quantity, 0);
      }
    })
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }

}
