import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { TokenService } from 'src/app/utils/services/token.service';
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
  private _userInformation: User | undefined;

  constructor(private _http:HttpClient,
              private _tokenService: TokenService) { }

  get user() {
    return {...this._userInformation};
  }

  login(email: string, password: string): Observable<LoginAnswer>{
    return this._http.post<LoginAnswer>(`${this._api}/auth/login`, { email, password})
      .pipe(
        tap(({access_token }) => {
          this._tokenService.save(access_token);
        })
      );
  }

  profile(): Observable<User>{
    return this._http.get<User>(`${this._api}/auth/profile`).pipe(
      tap( resp => {
        this._userInformation = resp;
      })
    );
  }
}
