import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { }
  result: any;
  ID: any;
  passWord: any;
  Company_Name:any;
  login1:any;
  ngOnInit(): void {
    this.login1=localStorage.getItem('login');
  }

  login() {
    debugger
    localStorage.setItem("login",'1');
    debugger
    location.href ='/Dashboard';
    alert("LOGIN  successful");
  }
}
