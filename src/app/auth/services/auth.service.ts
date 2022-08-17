import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserDTO } from '../interfaces/user.interface';

interface LoginAnswer {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _api: string = environment.api;

  constructor(private _http:HttpClient) { }

  login(email: string, password: string): Observable<LoginAnswer>{
    return this._http.post<LoginAnswer>(`${this._api}/auth/login`, { email, password});
  }

  profile(): Observable<User>{
    return this._http.get<User>(`${this._api}/auth/profile`);
  }
}
