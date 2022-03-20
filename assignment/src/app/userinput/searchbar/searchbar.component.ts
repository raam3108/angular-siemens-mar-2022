import { Component, OnInit } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { CommunicationService } from 'src/app/service/communication.service';
import { ProductFilter } from 'src/app/service/productfilter.service';

@Component({
  selector: 'search-bar-component',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  filterText:string="";
  inStockOnly:boolean=false;
  states: string[]=['alabama'];

 

  constructor(private productfilter:ProductFilter,private communicationService:CommunicationService) { }

  ngOnInit(): void {
    
  }

  onTextInput(searchText:string){

    

    let products = this.productfilter.checkStock(searchText,this.inStockOnly)

   

    this.communicationService.publish(products);

  }

}
