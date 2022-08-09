import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ToastModule} from 'primeng/toast';
import {SkeletonModule} from 'primeng/skeleton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ToastModule,
    SkeletonModule
  ],
  exports: [
    ToastModule,
    SkeletonModule
  ]
})
export class PrimengModule { }
