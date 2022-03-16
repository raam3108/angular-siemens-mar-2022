import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UtilityModule } from '../utility/utility.module';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    FormsModule
  ],
  exports:[LoginComponent,SignupComponent]
})
export class AccountsModule { }
