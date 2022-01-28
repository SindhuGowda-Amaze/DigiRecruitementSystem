import { Component, OnInit } from '@angular/core'
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-vendor-dashboard',
  templateUrl: './vendor-dashboard.component.html',
  styleUrls: ['./vendor-dashboard.component.css']
})
export class VendorDashboardComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  vendordetails:any;
  vendor_Logo:any;
  vendor_Name:any;
  phone_Number:any;
  email_Id:any;
  address:any;
  search:any;
  count:any;
  loader:any;
 
  
  ngOnInit(): void {
    this.GetVendor_Dasboard(); 
    this.loader=true;
 
  }


  public GetVendor_Dasboard() {
     
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {   
    this.vendordetails = data;
    this.loader=false;
    this.count = this.vendordetails.length;    
    })
  }
  edit(id: any){
    debugger
   location.href="#/VendorForm/"+ id;
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
