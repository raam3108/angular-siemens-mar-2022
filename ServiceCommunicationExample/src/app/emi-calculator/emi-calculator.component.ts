import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmiDataModel } from '../model/EmiDataModel';
import { CommunicationService } from '../services/communication.service';
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

  constructor(private service:CommunicationService,private emiCalculatorService:EmiCalculatorService) {
    
    
    
   }

   onClick(){
    
    [this.simpleInterest,this.totalAmount,this.monthlyEmi] = this.emiCalculatorService.calculate(this.amount,this.tenure,this.rate)
    let emiData = new EmiDataModel(this.monthlyEmi,this.totalAmount,this.simpleInterest)
    this.service.publish(emiData);
  
   }

   onClear(){
     this.amount =0;
     this.tenure = 0;
     this.rate = 0;
    
   
   }

  ngOnInit(): void {
  }

}
