import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-applied-candidates-reports',
  templateUrl: './applied-candidates-reports.component.html',
  styleUrls: ['./applied-candidates-reports.component.css']
})
export class AppliedCandidatesReportsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  joblist: any;
  count: any;
  DropJobList: any;
  dummjoblist: any;
  term: any;
  loader:any;
  ngOnInit(): void {
    this.loader=true;
    this.GetCandidateReg()
  }
  refresh(){
    location.reload();
  }
  
  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.dummjoblist = data.filter(x => x.accept == 0 && x.reject == 0)
      this.joblist = data.filter(x => x.accept == 0 && x.reject == 0);
      this.loader=false;
      this.count = this.joblist.length;
    })


    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.DropJobList = data;

    })

  }

  jobid: any;

  public GetJobFilter(even:any) {
    this.jobid = even.target.value;

    if (even.target.value != 0) {
      this.joblist = this.dummjoblist.filter((x: { jobID: any; }) => x.jobID == this.jobid)
    }
    else {
      this.GetCandidateReg();
    }
  }
}
