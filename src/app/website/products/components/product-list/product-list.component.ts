import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartItem } from 'src/app/website/auth/interfaces/cart-item.interface';
import { Product } from '../../interface/product.interface';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform:'translateX(0)'})),
      state('closed', style({ transform:'translateX(100%)' })),
      transition('closed => open', [ animate('.3s') ]),
      transition('open => closed', [ animate('.3s') ]),
    ]),
  ]
})
export class ProductListComponent implements OnInit{

  private cartServiceInstance: CartService;
  public cartList: CartItem[];
  public selectedProduct: number | string | undefined;
  public actualUrl: string;

  @Input() products!: Product[];

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router
  ) {
    this.cartServiceInstance = CartService.getInstance();
    this.cartList = this.cartServiceInstance.cartList;
    this.actualUrl =  this._formatURL(this._router.url);
  }
  ngOnInit(): void {
    this._ar.queryParamMap.subscribe((params) => {
      if ( params.get('product') ) {
        this.openDetail(params.get('product')!);
      }
    })
  }

  private _formatURL(url: string): string  {
    const questionMarkIndex: number = url.indexOf('?');

    if ( questionMarkIndex !== -1 ) {
      return url.substring(0, questionMarkIndex)
    } else {
      return url;
    }
  }

  public closeDetailed(): void {
    this.selectedProduct = undefined;
    this._router.navigate([`${this.actualUrl}`], { queryParams: {}});
  }

  public onAddToCart( product: Product): void {
    this.cartServiceInstance.addToCart(product);
  }

  public openDetail( productID: number | string): void {
    (this.selectedProduct === productID)
      ? this.selectedProduct = undefined
      : this.selectedProduct = productID;
    this._router.navigate([`${this.actualUrl}`], {
      queryParams: {
        product: productID
      }
    });
  }

}
