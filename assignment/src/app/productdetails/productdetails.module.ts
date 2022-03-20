import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProducttableComponent } from './producttable/producttable.component';
import { ProductcategoryrowComponent } from './productcategoryrow/productcategoryrow.component';
import { ProductrowComponent } from './productrow/productrow.component';
import { ProductFilter } from '../service/productfilter.service';
import { CommunicationService } from '../service/communication.service';



@NgModule({
  declarations: [
    ProducttableComponent,
    ProductcategoryrowComponent,
    ProductrowComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ProducttableComponent],
  providers:[ProductFilter,CommunicationService]
})
export class ProductdetailsModule { }
