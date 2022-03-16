import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
