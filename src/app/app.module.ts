import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent} from  './header/header.component';
import { BodyComponent } from './body/body.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
