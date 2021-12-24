import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor-job-openings',
  templateUrl: './vendor-job-openings.component.html',
  styleUrls: ['./vendor-job-openings.component.css']
})
export class VendorJobOpeningsComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  joblist: any;
  search: any;
  count: any;
  term: any;
  ngOnInit(): void {
    this.GetUserslist();
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data;
      this.count = this.joblist.length;
    })


  }
  Userlist:any;
 public GetUserslist(){
  this.RecruitmentServiceService.GetUserslist().subscribe(data => {
    this.Userlist = data.filter(x=>x.userRoleID==7);
    this.count = this.joblist.length;
  })
 }
  
 GetId(job:any){
  this.ID=job.id
  // location.href="/JobVacancies/"+job.id;
   location.href="/JobVacancies"
 }
 ID:any;
}
