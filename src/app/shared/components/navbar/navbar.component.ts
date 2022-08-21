import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/utils/services/token.service';
import { User } from 'src/app/website/auth/interfaces/user.interface';
import { AuthService } from 'src/app/website/auth/services/auth.service';
import { CartService } from 'src/app/website/products/services/cart.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private _cartInstance: CartService;
  public activeMenu: boolean = false;
  public productsQuantity: number = 0;
  public userInformation: User | undefined;

  constructor(public authService: AuthService,
              public tokenService: TokenService,
              private _router: Router) {
    this._cartInstance = CartService.getInstance();
  }

  ngOnInit(): void {
    this._cartInstance.myCart$.subscribe({
      next: (cartList) => {
        this.productsQuantity = cartList.reduce((sum, cart) => sum + cart.quantity, 0);
      }
    });

    this.authService.userData$.subscribe((user) => {
      this.userInformation = user;
    })
  }

  toggleMenu(): void {
    this.activeMenu = !this.activeMenu;
  }
  public logout(): void {
    this.authService.logout();
  }
}
