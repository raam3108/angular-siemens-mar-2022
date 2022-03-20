import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductFilter } from 'src/app/service/productfilter.service';

@Component({
  selector: 'product-category-row-component',
  templateUrl: './productcategoryrow.component.html',
  styleUrls: ['./productcategoryrow.component.css']
})
export class ProductcategoryrowComponent implements OnInit {


  constructor(private productFilter:ProductFilter) { }

  @Output()
  getUniqueCategories  = new EventEmitter<any>();

  ngOnInit(): void {
  }

  getCategories(){
    let categories = this.productFilter.getCategories();
    this.getUniqueCategories.emit(categories)
  }

}
