import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  vendor_Logo:any;
  vendor_Name:any;
  phone_Number:any;
  email_ID:any;
  address:any;
  result:any;
  id:any;
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
      this.vendor_Logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  Save(){
    debugger 
   var json = { 
    "Vendor_Logo":this.vendor_Logo,
    "Vendor_Name":this.vendor_Name,
    "Phone_Number":this.phone_Number,
    "Email_ID":this.email_ID,
    "Address":this.address

    };
    this.RecruitmentServiceService.InsertVendor_Dasboard(json).subscribe(
      data => {
        debugger
        let id = data;
    alert("Successfully saved!!")
      location.href="/Department"
      })
  }

  GetVendor_Dasboard() {
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(
    data => {
    debugger
    this.result = data;
		this.result=this.result.filter((x: { id: any; })=>x.id==Number(this.id));
		this.vendor_Name=this.result[0].name;
		this.phone_Number=this.result[0].code;
    this.email_ID=this.result[0].remarks;
    this.address=this.result[0].remarks;

      }
    )
  }

  Update(){
    debugger
     var json = {
       "Vendor_Logo":this.vendor_Logo,
      "Vendor_Name":this.vendor_Name,
      "Phone_Number":this.phone_Number,
      "Email_ID":this.email_ID,
      "Address":this.address    
      };
    
      this.RecruitmentServiceService.UpdateVendor_Dasboard(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
      // location.href="/Department";
      })
    }



}
