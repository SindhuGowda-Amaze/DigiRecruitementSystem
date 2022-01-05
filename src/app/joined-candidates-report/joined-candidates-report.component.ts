import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-joined-candidates-report',
  templateUrl: './joined-candidates-report.component.html',
  styleUrls: ['./joined-candidates-report.component.css']
})
export class JoinedCandidatesReportComponent implements OnInit {

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
      this.joblist = data.filter(x => x.offerAcceptreject == 1);
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }

  fileName = 'JOINED CANDIDATES REPORT.xlsx';
  exportexcel(): void {
    this.loader = true;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Joined Candidates');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }
}
