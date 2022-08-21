import { animate, state, style, transition, trigger } from '@angular/animations';
import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router, RoutesRecognized } from '@angular/router';
import { map, Observable, retry, Subscription, switchMap, tap, timer } from 'rxjs';
import { CartItem } from 'src/app/website/auth/interfaces/cart-item.interface';
import Swal from 'sweetalert2';
import { Category, Product } from '../../interface/product.interface';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  private _categoryID: string | null;
  public products: Product[];
  state$!: Observable<any>;
  public pagination = {
    limit: 10,
    offset: 0
  }
  public categoryTitle!: string;

  constructor(
    private _ar: ActivatedRoute,
    private _productService: ProductService
  ) {
    this.products = [];
    this._categoryID = null;
  }

  ngOnInit(): void {
    this._fetchProducts();
  }

  private _fetchProducts(): void {
    this._ar.paramMap.pipe(
      retry(3),
      switchMap( (params) => {
        this._categoryID = params.get('id') || '0';
        return this._productService.getProductsByCategory(
          this._categoryID,
          this.pagination.limit,
          this.pagination.offset
        )}),
      tap( products => {
        this.categoryTitle = products[0].category?.name || '';
      })
    ).subscribe({
      next: (products) => {
        if (!(products instanceof Array)) {
          this.products = [products]
        } else {
          this.products = products || [];
        }
      },
      error: (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          icon: 'error',
          text: 'Contact with the administrator',
          timer: 1500,
          position: 'top-right'
        })
      }
    })
  }

  public paginationManager(page: number): void {
    this.pagination.offset += page;
    this._fetchProducts();
  }
}
