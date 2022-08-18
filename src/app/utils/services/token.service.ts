import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  public save(token: string): void {
    localStorage.setItem('token', token);
  }

  public get(): string | null {
    return localStorage.getItem('token');
  }
}
