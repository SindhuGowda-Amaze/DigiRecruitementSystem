import { Component, OnInit } from '@angular/core'
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }
  vendordetails:any;
  vendor_Logo:any;
  vendor_Name:any;
  phone_Number:any;
  email_Id:any;
  address:any;
  ngOnInit(): void {
    this.GetVendor_Dasboard();  
  }


  public GetVendor_Dasboard() {
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {
      this.vendordetails = data;
     
    })
  }
  edit(id: any){
    debugger
   location.href="/VendorForm/"+ id;
  }


  public Ondelete(id:any) {
    this.RecruitmentServiceService.DeleteVendor_Dasboard(id).subscribe(
      data => {
        debugger
        this. GetVendor_Dasboard();
        swal.fire('Deleted');
      }
    )
    
  }



}