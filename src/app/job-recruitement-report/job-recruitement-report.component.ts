import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
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
  exportexcel(){
    
  }

  joblist: any;
  search: any;
  count: any;

  ngOnInit(): void {
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data;
      this.count = this.joblist.length;
    })
  }
}
