import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [
    RegisterFormComponent,
    RegisterComponent,
    LoginComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    QuicklinkModule
  ],
  exports: [
    RegisterFormComponent
  ]
})
export class AuthModule { }
