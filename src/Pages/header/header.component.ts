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
  roleid:any;
  ngOnInit() {
    this.temp=sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
  }

  logout() {
    sessionStorage.clear();
    location.href = "/Login";

    // localStorage.clear();
    //location.reload();
  }
}
