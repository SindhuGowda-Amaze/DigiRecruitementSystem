import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recruitement';

  company_name: any;
  login:any
  ngOnInit() {
    this.login=localStorage.getItem('login')
    this.company_name = localStorage.getItem("company_name");
  }
}
