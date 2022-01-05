import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vendor-job-openings',
  templateUrl: './vendor-job-openings.component.html',
  styleUrls: ['./vendor-job-openings.component.css']
})
export class VendorJobOpeningsComponent implements OnInit {
  Date: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }
  joblist: any;
  search: any;
  count: any;
  vendorid: any;
  term:any;
  userid:any;
  roleid:any;
  ngOnInit(): void {
    debugger;
    this.userid=sessionStorage.getItem('userid')
    
    this.vendorid = sessionStorage.getItem('vendorid');
    this.roleid = sessionStorage.getItem("roleid")
    if(this.roleid=='3'){
      debugger;
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.vendor == this.userid);
        this.count = this.joblist.length;
      })
  
    }
    else {
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data;
        this.count = this.joblist.length;
      })
    }
    this.GetUserslist();
  

  }
  // Userlist: any;
  // public GetUserslist() {
  //   this.RecruitmentServiceService.GetUserslist().subscribe(data => {
  //     this.Userlist = data.filter(x => x.userRoleID == 7);
  //     this.count = this.joblist.length;
  //   })
  // }

  GetId(id: any) {
    this.ID = id
    location.href = "#/JobVacancies/" + this.ID
  }

  GetId1(id: any) {
    this.ID = id
    this.Getvendorid(this.ID);
  }
  ID: any;
  searchByCtc: any
  Vendor:any;
  Notes:any;
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

  Userlist: any;
  public GetUserslist() {
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {
      this.Userlist = data;

    })
  }

  Getvendorid(even: any) {
    debugger
    this.vendorid = even;
    debugger
    var list = this.Userlist.filter((x: { id: any; })=>x.id==this.vendorid);
    this.Vendor=list[0].name

  }
  
  





  public GetDate(event:any) {
    if(this.Date==0){
      debugger
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x => x.recruiter == this.userid);
        this.count = this.joblist.length;
      })
    }
    else{
      debugger
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        debugger
        this.joblist = data.filter(x => x.recruiter == this.userid && x.date==this.Date);
      debugger
        this.count = this.joblist.length;
      })
    }
    
  }
}
