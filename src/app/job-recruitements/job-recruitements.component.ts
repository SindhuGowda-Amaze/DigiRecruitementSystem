import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-recruitements',
  templateUrl: './job-recruitements.component.html',
  styleUrls: ['./job-recruitements.component.css']
})
export class JobRecruitementsComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  joblist: any;
  search: any;
  count: any;
 
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
  
 GetId(id:any){
  this.ID=id
 }
 ID:any;
 Vendor:any;
 Notes:any;
 
 public UpdateVendor() {
  debugger
  
    var entity = {
     "ID":this.ID,
     "Vendor":this.Vendor,
     "Notes":this.Notes
    }

  
  this.RecruitmentServiceService.UpdateVendor(entity).subscribe(data => {
  
      Swal.fire('Updated successfully');
       location.reload();
    
  })
}

}
