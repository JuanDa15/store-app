import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ImageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ImageComponent
  ]
})
export class SharedModule { }
