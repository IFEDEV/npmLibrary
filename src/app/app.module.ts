import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MyDemoLibModule } from 'my-demo-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyDemoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
