import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/service/communication.service';
import { ProductFilter } from 'src/app/service/productfilter.service';

@Component({
  selector: 'product-table-component',
  templateUrl: './producttable.component.html',
  styleUrls: ['./producttable.component.css']
})
export class ProducttableComponent implements OnInit {

  
  subscriptionRef:any=null;

  constructor(private productFilter:ProductFilter,private communicationService:CommunicationService) { }

  categories = this.productFilter.getCategories();

  products = this.productFilter.getProducts();

  ngOnInit(): void {
    this.subscriptionRef = this.communicationService.getObservableRef().subscribe((products)=>{
      this.products = products;


    })
    
  }

}
