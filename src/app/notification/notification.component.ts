import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  joblist: any;
  count: any;
  search: any;
  date: any;
  loader:any;
  roleid:any;
  email:any;
  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }


  ngOnInit(): void {
    this.GetCandidateReg()
    this.roleid = sessionStorage.getItem('roleid');
    this.loader=true;
  }

  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  candidateid: any;
  candidatename: any;


  public GetOfferID(id:any, job:any) {
    this.candidateid = id;
    this.candidatename = job.candidateName,
    this.email = job.email
  }
  
  Date:any;
  userid:any;
  public GetDate(event:any) {
    if(this.Date==0){
      debugger
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid);
        this.count = this.joblist.length;
      })
    }
    else{
      debugger
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid && x.date==this.Date);
      
        this.count = this.joblist.length;
      })
    }
    
  }
 
}
