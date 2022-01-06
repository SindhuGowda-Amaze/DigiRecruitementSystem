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
  myDate: any;

  search: any;
  count: any;
  count1: any;
  count2: any;
  count3: any;
  count4: any;
  count5: any;
  count6: any;

  joblist1: any;
  joblist2: any;
  joblist3: any;
  joblist4: any;
  joblist5: any;
  joblist6: any;
  joblist7: any;
  joblist8: any;
  roleid: any;
  joblist9:any;
  joblist10:any;
  joblist11:any;
  joblist12:any;
  joblist13:any;
  joblist14:any;
  vendorid: any;
  joblist:any;
  hrlist:any;
  constructor(public router: Router, private datePipe: DatePipe,
    private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.hiringManager='Select Vendor'
    this.myDate = new Date();
    this.showfront = true;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;
    this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
    this.roleid = localStorage.getItem('roleid');
    this.vendorid = localStorage.getItem('vendorid');

    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.hrlist = data;
    })
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      debugger
      this.joblist1 = data.filter(x => x.vendor == null);
      this.joblist1 = this.joblist1.slice(0, 3);
      debugger

    })


    

   
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data
     debugger
     this.count = this.joblist.length;
    })


    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      debugger
      this.joblist2 = data.filter(x => x.vendor == null);
      if(this.roleid==2)
      {
        this.count = this.joblist2.length;
      }
      
      debugger
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist3 = data.filter(x => x.accept == 0 && x.reject == 0);
      this.joblist3 = this.joblist3.slice(0, 4);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist4 = data.filter(x => x.accept == 0 && x.reject == 0);
      this.count1 = this.joblist4.length;
      
      debugger
    })

    // this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
    //   debugger
    //   this.joblist4 = data.filter(x => x.vendorId == this.vendorid);
    //   debugger
    //   if(this.roleid==7){ 
    //     this.count1 = this.joblist4.length;
    //     this.joblist1 = this.joblist1.slice(0, 3);
    //   }
    // })



    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist5 = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.joblist5 = data.slice(0, 3);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist6 = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.count2 = this.joblist6.length;
      debugger
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist7 = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.joblist7 = this.joblist7.slice(0, 4);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist8 = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.count3 = this.joblist8.length;
      debugger
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist9 = data.filter(x => x.offered == 1 && x.offerAcceptreject == 0);
      this.joblist9 = this.joblist9.slice(0, 3);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist10 = data.filter(x => x.offered == 1 && x.offerAcceptreject == 0);
      this.count4 = this.joblist10.length;
      debugger
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist11 = data.filter(x => x.offerAcceptreject == 1);
      this.joblist11 = this.joblist11.slice(0, 4);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist12 = data.filter(x => x.offerAcceptreject == 1);
      this.count5 = this.joblist12.length;
      debugger
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist13 = data.filter(x => x.offerAcceptreject == 2);
      this.joblist13 = this.joblist13.slice(0, 4);
      debugger
     
    })

    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      debugger
      this.joblist14 = data.filter(x => x.offerAcceptreject == 2);
      this.count6 = this.joblist14.length;
      debugger
    })





  }
  hiringManager:any;
public GetJobRequirements(){


  this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
    debugger
   
    this.joblist = data.filter(x => x.vendor == null && x.hiringManager == this.hiringManager);
   
    this.count = this.joblist.length;
 

  })

 


}


  Anniversery: any
  Birthday: any;
  NewJoinee: any;


  public changebirthday() {
    debugger;
    this.Anniversery = false;
    this.Birthday = true;
    this.NewJoinee = false;

  }

  public changeAnniversary() {
    debugger;
    this.Anniversery = true;
    this.Birthday = false;
    this.NewJoinee = false;

  }


  public changenewjoinee() {
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
    this.router.navigate(['#/MyTeamLeaveDetails']);
  }

  public leavedashbaord() {
    debugger
    this.router.navigate(['#/LeaveListDashboard']);
  }
  public Regularization() {
    debugger
    this.router.navigate(['#/AttendanceView']);
  }
  public goprofile() {
    debugger
    this.router.navigate(['#/EmployeeProfileView']);
  }

}
