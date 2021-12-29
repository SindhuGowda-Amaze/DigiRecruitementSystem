import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-vendor-staff-dashboard',
  templateUrl: './vendor-staff-dashboard.component.html',
  styleUrls: ['./vendor-staff-dashboard.component.css']
})
export class VendorStaffDashboardComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }
  vendor_Name:any;
  staff_Name:any;
  email_Id:any;
  phone_Number:any;
  staff_Code:any;
  signature:any;
  role_Id:any;
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

  edit(id: any) {
    debugger
    location.href = "/VendorStaffForm/" + id;
  }


  public DisableStaff(id: any) {

    var eb = {
  
      'ID': id,
  
      'Enable_Disable': 1
  
    }
  
    this.RecruitmentServiceService.EnableVendorStaff(eb).subscribe(
      data => {
        debugger
        Swal.fire('Updated successfully.');
        location.reload();
      },
    )
  }
  
  public DisableStaff1(id: any) {
  
    var eb = {
  
      'ID': id,
  
      'Enable_Disable': 0
  
    }
  
    this.RecruitmentServiceService.EnableVendorStaff(eb).subscribe(
      data => {
        debugger
        Swal.fire('Updated successfully.');
        location.reload();
      },
    )
  }





}
