import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
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

  search: any;
  count: any;
  count1: any;
  count2: any;
  count3: any;

  joblist1:any;
  joblist2:any;
  joblist3:any;
  joblist4:any;
  joblist5:any;
  joblist6:any;
  joblist7:any;
  joblist8:any;

  constructor(public router: Router,private datePipe: DatePipe,
    private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.myDate = new Date();
    this.showfront = true;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');

    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist1 = data.slice(0, 4)
    
    })

    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist2 = data;
      this.count = this.joblist2.length;
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist3 = data.slice(0, 4)
      this.joblist3 = data.filter(x => x.accept == 0 && x.reject == 0);
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist4 = data.filter(x => x.accept == 0 && x.reject == 0);
      this.count1 = this.joblist4.length;
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist5 = data.slice(0, 3)
      this.joblist5 = data.filter(x => x.accept == 1 && x.scheduled == 0);
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist6 = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.count2 = this.joblist6.length;
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist7 = data.slice(0, 4)
      this.joblist7 = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist8 = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.count3 = this.joblist8.length;
    })

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
