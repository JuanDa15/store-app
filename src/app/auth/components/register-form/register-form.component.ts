import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
}
@Component({
  selector: 'register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
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

  createUser( event: SubmitEvent ): void {
    console.log(event);
    console.log(this.registerForm);
  }
}
