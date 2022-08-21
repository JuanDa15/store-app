import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { TimeInterceptor } from './utils/interceptors/time.interceptor';
import { TokenInterceptor } from './utils/interceptors/token.interceptor';
import { QuicklinkModule } from "ngx-quicklink";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    QuicklinkModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true
    },
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
