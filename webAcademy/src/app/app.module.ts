import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  HomeComponentComponent } from './pages/home/home/home.component';
import { HomeService } from './service/home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
