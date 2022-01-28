import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import * as XLSX from 'xlsx';
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
  loader:any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }

  ngOnInit(): void {
    this.loader=true;
    this.staffid = localStorage.getItem('staffssID');
    this.GetCandidateReg();
  }
  refresh() {
    location.reload();
  }
  public GetCandidateReg() {
    debugger
    if (this.staffid == undefined) {
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
        this.loader=false;
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

  fileName = 'SCHEDULED CANDIDATES REPORT.xlsx';
  exportexcel(): void {
    this.loader = true;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Scheduled Candidates');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }
}

