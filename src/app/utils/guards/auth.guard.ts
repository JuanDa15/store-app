import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from 'src/app/website/auth/services/auth.service';
import Swal from 'sweetalert2';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _authService: AuthService,
              private _router: Router,
              private _tokenService: TokenService){}

// (CanActivate) Antes de cargar los componentes de la ruta.
// (CanLoad) Antes de cargar los recursos (assets) de la ruta.
// (CanDeactivate) Antes de intentar salir de la ruta actual
// (usualmente utilizado para evitar salir de una ruta, si no se han guardado los datos).
// (CanActivateChild) Antes de cargar las rutas hijas de la ruta actual.
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this._authService.userData$.pipe(
      map( user => {
        if ( user ) {
          return true;
        } else {
          if (this._tokenService.get()) {
            return true;
          } else {
            this._router.navigateByUrl('/v1/auth/login');
            Swal.fire({
              title: 'error',
              text: 'Please login to your account',
              icon: 'warning',
              position: 'top-right',
              timer: 1500
            });
            return false;
          }
        }
      })
    )
  }


}
