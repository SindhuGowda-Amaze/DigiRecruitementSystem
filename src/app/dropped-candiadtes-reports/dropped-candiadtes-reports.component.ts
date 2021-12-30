import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-dropped-candiadtes-reports',
  templateUrl: './dropped-candiadtes-reports.component.html',
  styleUrls: ['./dropped-candiadtes-reports.component.css']
})
export class DroppedCandiadtesReportsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }


  refresh(){
    location.reload();
  }

  OfferComments: any;
  joblist: any;
  count: any;
  term: any;
  loader:any;
  ngOnInit(): void {
    this.loader=true;
    this.GetCandidateReg()
  }


  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist = data.filter(x => x.offerAcceptreject == 2);
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }
  }



