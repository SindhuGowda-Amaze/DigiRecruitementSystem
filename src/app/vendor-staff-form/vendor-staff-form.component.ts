import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-vendor-staff-form',
  templateUrl: './vendor-staff-form.component.html',
  styleUrls: ['./vendor-staff-form.component.css']
})
export class VendorStaffFormComponent implements OnInit {
  signature:any;
  staff_Name:any;
  phone_Number:any;
  email_Id:any;
  staff_Code:any;
  vendor_Name:any;


  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  result:any;
  Actions:any;
  id:any;
  ngOnInit(): void {
    this.GetVendor_Dasboard();
    this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
      this.GetVendor_Staff(); 
         
     }
    })
    
  }
  Company_logo:any;
  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }
  onRemove(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }
  public uploadattachments() {
    debugger
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

  GetVendor_Staff()
  {
  this.RecruitmentServiceService.GetVendor_Staff().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
      this.vendor_Name=this.result[0].vendor_Name;
      this.staff_Name=this.result[0].staff_Name;
      this.email_Id=this.result[0].email_Id;
      this.phone_Number=this.result[0].phone_Number;
      this.staff_Code=this.result[0].staff_Code;
      this.Actions=this.result[0].Actions;
    })
  }  
  Save(){
    debugger;
   var json = { 
    "Vendor_Name":this.vendor_Name,
    "Staff_Name":this.staff_Name,
    "Phone_Number":this.phone_Number,
    "Email_Id":this.email_Id,
    "Staff_Code":this.staff_Code,
    "Signature":this.Company_logo
    };
    this.RecruitmentServiceService.InsertVendor_Staff(json).subscribe(
      data => {
        debugger
        let id = data;
       alert("Successfully saved!!")
      location.href="/VendorStaffForm"
      })
  }
   vendordetails:any;
   public GetVendor_Dasboard() {
   this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(data => {
    this.vendordetails = data;
     
    })

  }

  Update() {
    debugger
    var json = {
      "ID":this.id,
      "Vendor_Name":this.vendor_Name,
      "Staff_Name":this.staff_Name,
      "Phone_Number":this.phone_Number,
      "Email_Id":this.email_Id,
      "Staff_Code":this.staff_Code,
      "Signature":this.Company_logo
    };
    this.RecruitmentServiceService.UpdateVendor_Staff(json).subscribe(
      data => {
        debugger
        alert("Updated Sucessfully");
        let id = data;
        location.href = "/VendorStaffDashboard";

      }
    )
  }
}





