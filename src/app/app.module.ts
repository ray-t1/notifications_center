import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng2ScreenshotModule } from 'ng2-screenshot';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HeaderComponent} from  './header/header.component';
import { BodyComponent } from './body/body.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, CommonModule, Ng2ScreenshotModule, NzIconModule,
    NzButtonModule,
    NzSwitchModule,
    NzCardModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
