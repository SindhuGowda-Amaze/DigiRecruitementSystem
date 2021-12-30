import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-recruitements',
  templateUrl: './job-recruitements.component.html',
  styleUrls: ['./job-recruitements.component.css']
})
export class JobRecruitementsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute,public router: Router,) { }
  joblist: any;
  search: any;
  count: any;
Date: any;
  loader:any;

  ngOnInit(): void {
    this.loader=true;
    this.GetRecruiterStaff();
    this.GetUserslist();
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data.filter(x => x.vendor == null);
      this.loader=false;
      debugger
      this.count = this.joblist.length;
    })


  }
  Userlist: any;
  public GetUserslist() {
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {
      this.Userlist = data;

    })
  }

  GetId(id: any) {
    this.ID = id
  }
  ID: any;
  Vendor: any;
  Notes: any;
  vendorid: any;
  userid: any;
  public UpdateVendor() {
    debugger

    var entity = {
      "ID": this.ID,
      "Vendor": this.Vendor,
      "Notes": this.Notes,
      "VendorId": 1
    }
    this.RecruitmentServiceService.UpdateVendor(entity).subscribe(data => {

      Swal.fire('Updated successfully');
      location.reload();

    })
  }
  Getvendorid(even: any) {
    debugger
    this.vendorid = even.target.value;
    debugger
    var list = this.Userlist.filter((x: { id: any; })=>x.id==this.vendorid);
    this.Vendor=list[0].name

  }


  public Regularization() {
    debugger
    this.router.navigate(['/AttendanceView']);
  }

  Recruiter:any;

  public UpdateRecruiter() {
    debugger

    var entity = {
      "ID": this.ID,
      "Recruiter": this.Recruiter,
      "Notes": this.Notes,
     
    }
    this.RecruitmentServiceService.AssignRecruiter(entity).subscribe(data => {

      Swal.fire('Updated successfully');
      location.reload();

    })
  }
  stafflist:any;
  public GetRecruiterStaff() {
    this.RecruitmentServiceService.GetRecruiterStaff().subscribe(
      data => {
      this.stafflist = data 
    })
  }

  public GetDate(event:any) {
    if(this.Date==0){
      debugger
      this.RecruitmentServiceService.GetUserslist().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid);
        this.count = this.joblist.length;
      })
    }
    else{
      debugger
      this.RecruitmentServiceService.GetUserslist().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid && x.date==this.Date);
      
        this.count = this.joblist.length;
      })
    }
    
  }

}
