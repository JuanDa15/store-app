import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServerError } from '../../interfaces/error-answer.interface';
import { AuthService } from '../../services/auth.service';


interface Login {
  email: string;
  password: string;
}

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ minHeight:'37px', opacity: 1 })),
      state('closed', style({ height: '0px', minHeight: '0px', opacity: 0, padding:0 })),
      transition('closed => open', [ animate('.3s') ]),
      transition('open => closed', [ animate('.3s') ]),
    ]),
  ]
})
export class LoginFormComponent {

  public user: Login = {
    email: '',
    password: '',
  }


  @ViewChild('loginForm') loginForm!: NgForm;

  constructor(private _authService: AuthService) { }

  get invalidLogin(): boolean | null {
    return this.loginForm?.submitted && this.loginForm?.invalid ? true : false;
  }

  public invalidControl(controlName: string) {
    const control: AbstractControl = this.loginForm?.controls[controlName];
    return control?.errors && control?.touched;
  }

  public errorMessage(controlName: string): string {
    const errors: ValidationErrors | null =
      this.loginForm?.controls[controlName]?.errors;

    if (errors?.['pattern']) {
      return 'Invalid email';
    } else if (errors?.['required']) {
      return 'Field required';
    } else {
      return '';
    }
  }

  public createUser( ): void {
    if (this.loginForm?.invalid) {
      for (let key in this.loginForm?.controls) {
        this.loginForm.controls[key].markAllAsTouched();
      }
    } else {
      this._authService.login(this.user.email, this.user.password)
        .subscribe({
          next: (value) => {
            Swal.fire({
              icon:'success',
              title: 'Login success',
              text: 'Successfully logged in !!',
              position: 'top-right',
              timer: 1500
            });
          },
          error: (err) => {
            Swal.fire({
              icon:'error',
              title: 'User',
              text: 'User or password invalid',
              position: 'top-right',
              timer: 1500
            })
          }
        })
    }
  }

}
