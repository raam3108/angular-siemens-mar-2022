import { Component, Input, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'emiSummary-component',
  templateUrl: './emi-summary.component.html',
  styleUrls: ['./emi-summary.component.css']
})
export class EmiSummaryComponent implements OnInit {

  @Input()
  emi:number=0;
  @Input()
  amount:number = 0;
  @Input()
  interest:number = 0;

  subscriptionRef:any = null;

  constructor(private service:CommunicationService) { }

  ngOnInit(): void {

    this.subscriptionRef = this.service.getObservableRef().subscribe((emiData)=>{
      this.emi = emiData.emi;
      this.amount = emiData.amount;
      this.interest = emiData.interest;


    })
  }

}
