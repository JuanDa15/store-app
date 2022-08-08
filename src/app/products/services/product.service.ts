import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _api: string = environment.api;

  constructor(private _http: HttpClient) { }

  public getAllProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this._api + 'products');
  }

  public getSingleProduct(id: number): Observable<Product> {
    return this._http.get<Product>(`${this._api}products/${id}`);
  }

}
