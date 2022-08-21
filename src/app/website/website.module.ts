import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from 'primeng/api';
import { QuicklinkModule } from "ngx-quicklink";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule,
    QuicklinkModule
  ]
})
export class WebsiteModule { }
