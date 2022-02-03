import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  company_name: any;
  temp:any
  roleid:any;
  role:any;
  UserName:any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }
  logout() {
    sessionStorage.clear();
    location.href = "#/Login";

    // localStorage.clear();
    location.reload();
  }

home:any
  public admin() {
    debugger
    if (this.roleid=='1') {
    localStorage.setItem('Pagename', 'Dashboard')
    this.router.navigate(['/AdminDashboard']);
    this.home=true
    }
    else if( this.roleid!='5')
    {
      localStorage.setItem('Pagename', 'Dashboard')
      this.router.navigate(['/AdminDashboard']);
      this.home=true
    }
    else if(this.roleid=='6'){
      localStorage.setItem('Pagename', 'Dashboard')
      this.router.navigate(['/Dashboard']);
      this.home=true
    }
    else if(this.roleid=='3'){
      localStorage.setItem('Pagename', 'Dashboard')
      this.router.navigate(['/Dashboard']);
      this.home=true
    }
    else if(this.roleid=='1'){
      localStorage.setItem('Pagename', 'Dashboard')
      this.router.navigate(['/Dashboard']);
    }
  }
}
