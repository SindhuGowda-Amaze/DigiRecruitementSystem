import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  company_name: any;
  temp:any
  ngOnInit() {
    this.temp=localStorage.getItem('temp')
  
    this.company_name = localStorage.getItem("company_name");
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
    location.href = "/Login";
    //location.reload();
  }
}
