import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    NavbarComponent,
    ImageComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ImageComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
