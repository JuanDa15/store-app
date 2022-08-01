import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, NgForm, ValidationErrors } from '@angular/forms';

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
export class RegisterFormComponent implements OnInit {

  public user: User = {
    name: '',
    email: '',
    password: '',
    verifyPassword: ''
  }

  @ViewChild('registerForm') registerForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  public invalidControl(controlName: string) {
    const control: AbstractControl = this.registerForm?.controls[controlName];
    return control?.errors && control?.touched;
  }

  public errorMessage(controlName: string): string {
    const errors: ValidationErrors =
      this.registerForm?.controls[controlName]?.errors || {};

    if (errors['required']) {
      return 'Field required';
    } else if (errors['pattern']) {
      return 'Invalid email';
    }else {
      return '';
    }
  }

  public createUser( event: SubmitEvent ): void {
    if (this.registerForm?.invalid) {
      for (let key in this.registerForm?.controls) {
        this.registerForm.controls[key].markAllAsTouched();
      }
    } else {
      console.log('ta bien');
    }
    console.log(event);
    console.log(this.registerForm);
  }
}
