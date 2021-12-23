import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-selected-candidates-reports',
  templateUrl: './selected-candidates-reports.component.html',
  styleUrls: ['./selected-candidates-reports.component.css']
})
export class SelectedCandidatesReportsComponent implements OnInit {
  joblist: any;
  count: any;
  search: any;
  date: any;
  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetCandidateReg()
  }
  refresh(){
    location.reload();
  }
  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.count = this.joblist.length;
    })

  }
}
