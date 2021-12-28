import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';

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


  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
  }

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
    this.RecruitmentServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.signature = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

  Save(){
    debugger 
   var json = { 
     "Vendor_Name":this.vendor_Name,
    "Staff_Name":this. staff_Name,
    "Phone_Number":this.phone_Number,
    "Email_Id":this.email_Id,
    "Staff_Code":this.staff_Code,
    "Signature":this.signature
    };
    this.RecruitmentServiceService.InsertVendor_Staff(json).subscribe(
      data => {
        debugger
        let id = data;
       alert("Successfully saved!!")
      location.href="/VendorStaffForm"
      })
  }




}
