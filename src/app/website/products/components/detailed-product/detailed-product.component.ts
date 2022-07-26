import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { retry } from 'rxjs';
import Swal from 'sweetalert2';
import { SwiperOptions } from 'swiper';
import { Product } from '../../interface/product.interface';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.scss'],
  providers: [MessageService]
})
export class DetailedProductComponent {
  private cartServiceInstance: CartService;
  public product!: Product;
  private _id!: number | string |undefined;

  public UIManagers = {
    cantAddToCart: false,
    showSkeleton: false
  }

  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50
  }

  @Input() set productID( id: number | string |undefined ) {
    this._id = id;
    (this._id) && this._fetchProductData();
  }
  @Output() closeProduct: EventEmitter<void> = new EventEmitter();

  constructor(private _productService: ProductService,
              private _messageService: MessageService) {
    this.cartServiceInstance = CartService.getInstance();
    this.UIManagers.cantAddToCart = false;
  }

  private _fetchProductData(): void {
    this.UIManagers.showSkeleton = true;
    this._productService.getSingleProduct(this._id!).pipe(
      retry(2)
    ).subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
          this.UIManagers.showSkeleton = false;
        } else {
         this._doesntExist();
        }
      },
      error: () => {
        this._doesntExist();
        Swal.fire({
          timer: 1500,
          title: 'Error',
          icon: 'error',
          text: 'Error, please try again',
          position: 'top-right',
          showConfirmButton: false,
          backdrop: false
        })
      }
    })
  }

  public closeDetail(): void {
    this.closeProduct.emit();
  }

  private _doesntExist(): void {
    this.closeProduct.emit();
    Swal.fire({
      timer: 1500,
      title: 'Error',
      icon: 'error',
      text: "Error, product doesnt exist",
      position: 'top-right',
      showConfirmButton: false,
      backdrop: false
    })
  }

  public addToCart(): void {
    this.cartServiceInstance.addToCart(this.product);
    this._messageService.add({
      severity:'success',
      summary: 'Success',
      detail: `"${this.product.title}" added to cart`,
      life: 1500
    });
    this.UIManagers.cantAddToCart = true;
  }

  public closeToast(): void {
    this.UIManagers.cantAddToCart = false;
  }
}
