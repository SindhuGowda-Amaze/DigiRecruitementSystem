import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
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
  loader:any;

  ngOnInit(): void {
    this.loader=true;
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data;
      this.loader=false;
      this.count = this.joblist.length;
    })
  }
}
