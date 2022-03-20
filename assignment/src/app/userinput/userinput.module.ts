import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { FormsModule } from '@angular/forms';
import { ProductFilter } from '../service/productfilter.service';



@NgModule({
  declarations: [
    SearchbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SearchbarComponent],
  providers:[ProductFilter]
})
export class UserinputModule { }
