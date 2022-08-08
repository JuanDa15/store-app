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

  @Input() product!: Product;

  @Output() addedProduct: EventEmitter<Product> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  public onAddToCart( event: Event): void {
    event.stopPropagation();
    this.addedProduct.emit(this.product);
    this.messageService.add({
      severity:'success',
      summary: 'Success',
      detail: `"${this.product.title}" added to cart`
    });
  }

}
