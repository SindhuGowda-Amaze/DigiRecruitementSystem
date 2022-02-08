import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import * as XLSX from 'xlsx';
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
  roleid:any;
  hrlist:any;
  hiringManager:any;
  ngOnInit(): void {
    this.roleid = sessionStorage.getItem('roleid');
    this.loader=true;
    
    this.hiringManager="";
    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.hrlist = data;
    })
    this.GetCandidateReg();
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

  fileName = 'DROPPED CANDIDATES REPORT.xlsx';
  exportexcel(): void {
    this.loader = false;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Dropped Candidates');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }

  public GetJobRequirements(){
  
  
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      debugger
     
      this.joblist = data.filter(x => x.vendor == null && x.hiringManager == this.hiringManager);
     
      this.count = this.joblist.length;
   
  
    })
  
   
  
  
  }
  }



