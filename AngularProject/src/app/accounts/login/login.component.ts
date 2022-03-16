import { Component, OnInit } from '@angular/core';
import { ConsoleLoggerService } from 'src/app/services/consoleLogger.service';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName:string;
  password:string

  constructor(private loggerService:ConsoleLoggerService) { 
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
    this.loggerService.write(`userName:,${this.userName},'\n','password:',${this.password}`);
  }

  clear():void{
    this.userName='';
    this.password='';
  }

  ngOnInit(): void {
  }

}
