import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class AuthModule { }
