import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vendor-staff-dashboard',
  templateUrl: './vendor-staff-dashboard.component.html',
  styleUrls: ['./vendor-staff-dashboard.component.css']
})
export class VendorStaffDashboardComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService ) { }
  vendor_Name:any;
  staff_Name:any;
  email_Id:any;
  phone_Number:any;
  staff_Code:any;
  signature:any;
  staffdetails:any;

  ngOnInit(): void {
  this.GetVendor_Staff(); 
  }

  
  public GetVendor_Staff() {
    this.RecruitmentServiceService.GetVendor_Staff().subscribe(data => {
      this.staffdetails = data;
     
    })
  }

  public Ondelete(id:any) {
    this.RecruitmentServiceService.DeleteVendor_Staff(id).subscribe(
      data => {
        debugger
        this.GetVendor_Staff();
        Swal.fire('Deleted');
      }
    )
  }

  edit(staffdetails: any) {
    debugger
    location.href = "/VendorStaffForm" + staffdetails.id;
  }








}
