import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  simpleInterest:number=0;
  totalAmount:number=0;
  monthlyEmi:number=0;
  title = 'SampleProject';
  onEmiResultCalculated(data:any):void{
    this.monthlyEmi = data[0];
    this.simpleInterest = data[1];
    this.totalAmount = data[2];
  }
}
