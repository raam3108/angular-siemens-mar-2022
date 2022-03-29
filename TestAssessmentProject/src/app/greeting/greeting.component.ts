import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
selector: 'app-greeting',
templateUrl: './greeting.component.html',
styleUrls: ['./greeting.component.css']
})

export class GreetingComponent implements OnInit ,OnChanges{
@Input()
message:string | undefined;
//state
displayText:string|undefined
constructor() { }

ngOnInit(): void {
}

ngOnChanges(): void {
this.displayText=this.message;
}

}