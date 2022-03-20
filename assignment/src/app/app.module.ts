import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdetailsModule } from './productdetails/productdetails.module';
import { UserinputModule } from './userinput/userinput.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserinputModule,
    FormsModule,
    ProductdetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
