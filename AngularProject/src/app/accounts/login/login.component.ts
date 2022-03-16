import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string

  constructor() { 
    this.password="";
    this.userName="";
  }

  onUserNameEdit(value:string):void{
    this.userName=value;
  }

  onPasswordEdit(value:string):void{
    this.password=value;
  }

  login():void{
    console.log("userName:",this.userName,'\n','password:',this.password);
  }

  clear():void{
    this.userName='';
    this.password='';
  }

  ngOnInit(): void {
  }

}
