import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { QuicklinkModule } from 'ngx-quicklink';


@NgModule({
  declarations: [
    NavbarComponent,
    ImageComponent,
    PaginationComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    QuicklinkModule
  ],
  exports: [
    NavbarComponent,
    ImageComponent,
    PaginationComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
