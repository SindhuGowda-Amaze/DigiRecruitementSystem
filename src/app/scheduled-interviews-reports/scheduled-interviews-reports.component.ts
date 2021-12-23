import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-scheduled-interviews-reports',
  templateUrl: './scheduled-interviews-reports.component.html',
  styleUrls: ['./scheduled-interviews-reports.component.css']
})
export class ScheduledInterviewsReportsComponent implements OnInit {

  joblist: any;
  search: any;
  count: any;
  staffid: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }

  ngOnInit(): void {
    this.staffid = localStorage.getItem('staffssID');
    this.GetCandidateReg()
  }
  refresh() {
    location.reload();
  }
  public GetCandidateReg() {
    debugger
    if (this.staffid == undefined) {
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
        this.count = this.joblist.length;
      })
    }
    else {
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        debugger
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0 && x.staffID == this.staffid);
        this.count = this.joblist.length;
      })
    }
  }
}

