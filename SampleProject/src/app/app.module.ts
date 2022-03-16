import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { EmiSummaryComponent } from './emi-summary/emi-summary.component';
import { EmiCalculatorService } from './services/EmiCalculatorService';

@NgModule({
  declarations: [
    AppComponent,
    EmiCalculatorComponent,
    EmiSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{provide:EmiCalculatorService,useClass:EmiCalculatorService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
