import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  showback: any;
  showfront: any;
  myDate:any;

  constructor(public router: Router,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.myDate = new Date();
    this.showfront = true;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
  }

  Anniversery:any
  Birthday:any;
  NewJoinee:any;


  public changebirthday(){
    debugger;
    this.Anniversery = false;
    this.Birthday = true;
    this.NewJoinee = false;

  }

  public changeAnniversary(){
    debugger;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;

  }


  public changenewjoinee(){
    debugger;
    this.Anniversery = false;
    this.Birthday = false;
    this.NewJoinee = true;

  }



  public flip(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };


  public flip1(event: { currentTarget: any; }) {
    debugger
    var element = event.currentTarget;
    if (element.className === "card1") {
      if (element.style.transform == "rotateY(180deg)") {
        element.style.transform = "rotateY(0deg)";
      }
      else {
        element.style.transform = "rotateY(180deg)";
      }
    }
  };

  public leavedashbaord1() {
    debugger
    this.router.navigate(['/MyTeamLeaveDetails']);
  }

  public leavedashbaord() {
    debugger
    this.router.navigate(['/LeaveListDashboard']);
  }
  public Regularization() {
    debugger
    this.router.navigate(['/AttendanceView']);
  }
  public goprofile() {
    debugger
    this.router.navigate(['/EmployeeProfileView']);
  }

}
