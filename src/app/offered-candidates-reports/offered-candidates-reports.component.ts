import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-offered-candidates-reports',
  templateUrl: './offered-candidates-reports.component.html',
  styleUrls: ['./offered-candidates-reports.component.css']
})
export class OfferedCandidatesReportsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }
  OfferComments: any;
  joblist: any;
  count: any;
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
      this.joblist = data.filter(x => x.offered == 1 && x.offerAcceptreject == 0);
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }
}
