import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(@Inject(PLATFORM_ID) private platformIDd: object) { }

  public save(token: string): void {
    if (isPlatformBrowser(this.platformIDd)) {
      localStorage.setItem('token', token);
    }
  }

  public get(): string | null {
    if (isPlatformBrowser(this.platformIDd)) {
      return localStorage.getItem('token');
    } else {
      return '';
    }
  }

  public remove(): void {
    if (isPlatformBrowser(this.platformIDd)) {
      return localStorage.removeItem('token');
    }
  }
}
