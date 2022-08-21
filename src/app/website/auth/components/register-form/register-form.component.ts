import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';
import Swal from 'sweetalert2';
import { ServerError } from '../../interfaces/error-answer.interface';
import { UserDTO } from '../../interfaces/user.interface';
import { UsersService } from '../../services/users.service';

interface User {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
}
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ minHeight:'37px', opacity: 1 })),
      state('closed', style({ height: '0px', minHeight: '0px', opacity: 0, padding:0 })),
      transition('closed => open', [ animate('.3s') ]),
      transition('open => closed', [ animate('.3s') ]),
    ]),
  ]
})
export class RegisterFormComponent {

  public user: User = {
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  }

  @ViewChild('registerForm') registerForm!: NgForm;

  constructor(private _userService: UsersService) { }

  public invalidControl(controlName: string) {
    const control: AbstractControl = this.registerForm?.controls[controlName];
    return control?.errors && control?.touched;
  }

  public errorMessage(controlName: string): string {
    const errors: ValidationErrors | null =
      this.registerForm?.controls[controlName]?.errors;

    if (errors?.['pattern']) {
      return 'Invalid email';
    } else if (errors?.['required']) {
      return 'Field required';
    } else {
      return '';
    }
  }

  public createUser( ): void {
    if (this.registerForm?.invalid) {
      for (let key in this.registerForm?.controls) {
        this.registerForm.controls[key].markAllAsTouched();
      }
    } else {
      const body: UserDTO = {...this.user};
      delete body?.verifyPassword;
      this._userService.create(body).subscribe({
        next: (value) => {
          Swal.fire({
            icon:'success',
            title: 'User created',
            text: 'Successfully created !!',
            position: 'top-right',
            timer: 1500
          });
        },
        error: (value) => {
          let err = <ServerError>value.error;
          let error = '';
          err.message.forEach((message) => {
            error += `${message}, `
          })
          Swal.fire({
            icon:'error',
            title: 'User',
            text: error,
            position: 'top-right',
            timer: 1500
          })
        }
      })
    }
  }
}
