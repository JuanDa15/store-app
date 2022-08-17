import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserDTO } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _api: string = environment.api;

  constructor(private _http: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this._http.get<User[]>(`${this._api}/users`);
  }

  public create(user: UserDTO): Observable<User> {
    return this._http.post<User>(`${this._api}/users`,user);
  }
}
