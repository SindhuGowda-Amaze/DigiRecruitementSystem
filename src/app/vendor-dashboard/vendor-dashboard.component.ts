import { Component, OnInit } from '@angular/core'
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';
import  { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private spinner:NgxSpinnerService) { }
  vendordetails:any;
  vendor_Logo:any;
  vendor_Name:any;
  phone_Number:any;
  email_Id:any;
  address:any;
  search:any;
  count:any;
  Spinner:any;
  
  ngOnInit(): void {
    this.GetVendor_Dasboard(); 
    // this.Spinner.show();
    // setTimeout(() => {
    //   /** spinner ends after 5 seconds */
    //   this.Spinner.hide();
    // }, 5000);
  }


  public GetVendor_Dasboard() {
     this.spinner.show();  
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {   
      setTimeout(() => { 
        this.spinner.hide();
      
    },3000);
 
    this.vendordetails = data;

      this.count = this.vendordetails.length;
    
     
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
