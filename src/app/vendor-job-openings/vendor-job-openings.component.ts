import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor-job-openings',
  templateUrl: './vendor-job-openings.component.html',
  styleUrls: ['./vendor-job-openings.component.css']
})
export class VendorJobOpeningsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }
  joblist: any;
  search: any;
  count: any;
  vendorid: any;
  term:any;
  userid:any;
  roleid:any;
  ngOnInit(): void {
    this.userid=sessionStorage.getItem('userid')
    this.GetUserslist();
    this.vendorid = localStorage.getItem('vendorid');
    this.roleid = localStorage.getItem("roleid")
    if(this.roleid==3){
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.vendor == this.userid);
        this.count = this.joblist.length;
      })
  
    }
    else {
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid);
        this.count = this.joblist.length;
      })
    }
  

  }
  Userlist: any;
  public GetUserslist() {
    this.RecruitmentServiceService.GetUserslist().subscribe(data => {
      this.Userlist = data.filter(x => x.userRoleID == 7);
      this.count = this.joblist.length;
    })
  }

  GetId(id: any) {
    this.ID = id
    location.href = "/JobVacancies/" + this.ID
  }
  ID: any;
}
