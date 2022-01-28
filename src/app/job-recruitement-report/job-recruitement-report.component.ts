import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-job-recruitement-report',
  templateUrl: './job-recruitement-report.component.html',
  styleUrls: ['./job-recruitement-report.component.css']
})
export class JobRecruitementReportComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }


  refresh(){
    location.reload();
  }

  joblist: any;
  search: any;
  count: any;
  loader:any;
  

  ngOnInit(): void {
    this.loader=true;
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data;
      this.loader=false;
      this.count = this.joblist.length;
    })
  }
  fileName = 'JOB RECRCUITMENT REPORT.xlsx';
  exportexcel(): void {
    this.loader = false;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Job Recruitment');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }

}
