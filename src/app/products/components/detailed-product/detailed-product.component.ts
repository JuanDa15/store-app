import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'detailed-product',
  templateUrl: './detailed-product.component.html',
  styleUrls: ['./detailed-product.component.scss']
})
export class DetailedProductComponent {
  private _id!: number | undefined;
  @Input() set productID( id: number | undefined ) {
    this._id = id;
    (this._id) && this._fetchProductData();
  }
  @Output() closeProduct: EventEmitter<void> = new EventEmitter();

  constructor(private _productService: ProductService) { }

  private _fetchProductData(): void {
    this._productService.getSingleProduct(this._id!)
    .subscribe({
      next: (val) => {
        console.log(val)
      }
    })
  }

  public closeDetail(): void {
    this.closeProduct.emit();
  }
}
