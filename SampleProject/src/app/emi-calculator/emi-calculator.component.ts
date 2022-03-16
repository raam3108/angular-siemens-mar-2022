import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmiCalculatorService } from '../services/EmiCalculatorService';

@Component({
  selector: 'emiCalculator-component',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent implements OnInit {

  amount:number=0;
  tenure:number=0;
  rate:number=0;
  simpleInterest:number=0;
  totalAmount:number=0;
  monthlyEmi:number=0;

  @Output()
  onResultCalculated = new EventEmitter<[number,number,number]>();

  //constructor injection

  constructor(private emiCalculatorService:EmiCalculatorService) {
    
    
    
   }

   onClick(){
    
    [this.simpleInterest,this.totalAmount,this.monthlyEmi] = this.emiCalculatorService.calculate(this.amount,this.tenure,this.rate)
     console.log(this.simpleInterest,this.monthlyEmi,this.totalAmount);
     this.onResultCalculated.emit([this.monthlyEmi,this.simpleInterest,this.totalAmount])
   }

   onClear(){
     this.amount =0;
     this.tenure = 0;
     this.rate = 0;
    
   
   }

  ngOnInit(): void {
  }

}
