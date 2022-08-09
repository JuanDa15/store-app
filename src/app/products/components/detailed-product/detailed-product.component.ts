import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import Swal from 'sweetalert2';
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
  private _id!: number | undefined;

  public UIManagers = {
    cantAddToCart: false,
    showSkeleton: false
  }

  @Input() set productID( id: number | undefined ) {
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
    this._productService.getSingleProduct(this._id!)
    .subscribe({
      next: (product) => {
        if (product) {
          this.product = product;
          this.UIManagers.showSkeleton = false;
        } else {
         this._doesntExist();
        }
      },
      error: () => {
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
