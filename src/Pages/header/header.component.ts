import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

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
  role:any;
  UserName:any;
  pagename: any;
  showsidebar: any;
  time: any;
  hh: any;
  mm: any;
  ampm: any;
  username: any
  ngOnInit() {


    interval(1000).subscribe((x => {
      this.pagename = localStorage.getItem('Pagename')


    }));

    
    this.temp=sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')

    

    setInterval(() => {
      var time = new Date();
      this.time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      let temp: any = this.time.split(':');
      this.hh = temp[0];
      let temp1: any = this.time.split(':')[1].split(" ");
      this.mm = temp1[0];
      this.ampm = temp1[1];
    }, 1000);


  }

  

  logout() {
    sessionStorage.clear();
    location.href = "#/Login";

    // localStorage.clear();
    location.reload();
  }
}
