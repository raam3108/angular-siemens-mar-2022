import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName:string="";
  password:string="";
  email:string="";

  signup(){
    console.log(this.userName,this.password,this.email);
  }

  clear():void{
    this.userName='';
    this.password='';
    this.email;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
