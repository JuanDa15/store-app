import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _api: string = environment.api;

  constructor(private _http: HttpClient) { }


  public getProductsByCategory(
    categoryId: string,
    limit:number = 10,
    offset: number = 0
  ): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('limit',limit)
      .set('offset',offset);
    return this._http.get<Product[]>(`${environment.api}categories/${categoryId}/products`,{
      params
    });
  }

  public getAllProducts(limit:number = 10, offset: number = 0): Observable<Product[]> {
    const params: HttpParams = new HttpParams()
      .set('limit',limit)
      .set('offset',offset)
    return this._http.get<Product[]>(this._api+'products', {
      params
    }).pipe(
      retry(3),
      map(products => products.map(product => {
        return {
          ...product,
          taxes: .19 * product.price
        }
      }))
    )
  }

  public getSingleProduct(id: number | string): Observable<Product> {
    return this._http.get<Product>(`${this._api}products/${id}`)
      .pipe(
        catchError( (error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.InternalServerError ) {
            return throwError(() => new Error('Ups error in the server'));
          }
          return throwError(() => new Error('Ups spomething goes wrong'));
        } )
      );
  }

}
