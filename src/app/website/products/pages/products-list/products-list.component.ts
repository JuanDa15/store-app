import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/website/products/interface/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform:'translateX(0)'})),
      state('closed', style({ transform:'translateX(100%)' })),
      transition('closed => open', [ animate('.3s') ]),
      transition('open => closed', [ animate('.3s') ]),
    ]),
  ]
})
export class ProductsListComponent implements OnInit {

  public products: Product[];

  public pagination = {
    limit: 10,
    offset: 0
  }

  constructor(
    private _productService: ProductService,
  ) {
    this.products = [];
  }

  ngOnInit(): void {
    this._fetchProducts();
  }

  private _fetchProducts(): void {
    this._productService.getAllProducts(this.pagination.limit, this.pagination.offset).subscribe({
      next: (products) => {
        this.products = products;
      }
    })
  }

  public paginationManager(page: number): void {
    this.pagination.offset += page;
    this._fetchProducts();
  }
}
