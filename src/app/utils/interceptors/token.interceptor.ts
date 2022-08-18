import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from "../services/token.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private _tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this._addToken(request));
  }

  private _addToken(request: HttpRequest<unknown>): HttpRequest<unknown> {
    const token = this._tokenService.get();

    if (token) {
      return request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`)
      })
    }
    return request;
  }
}
