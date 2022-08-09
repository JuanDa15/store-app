import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Product } from 'src/app/products/interface/product.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  providers: [MessageService]
})
export class ProductCardComponent {

  public cantAddToCart: boolean;

  @Input() product!: Product;

  @Output() addedProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private _messageService: MessageService) {
    this.cantAddToCart = false;
  }

  public onAddToCart( event: Event): void {
    event.stopPropagation();
    this.addedProduct.emit(this.product);
    this._messageService.add({
      severity:'success',
      summary: 'Success',
      detail: `"${this.product.title}" added to cart`,
      life: 500
    });
    this.cantAddToCart = true;
  }

  public closeToast(): void {
    this.cantAddToCart = false;
  }

}
