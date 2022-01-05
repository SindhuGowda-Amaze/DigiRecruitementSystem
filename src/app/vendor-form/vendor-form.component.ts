import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vendor-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css']
})
export class VendorFormComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  vendor_Logo: any;
  vendor_Name: any;
  phone_Number: any;
  email_ID: any;
  address: any;
  result: any;
  id: any;
  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      debugger
      this.id = params["id"];
      if (this.id != null && this.id != undefined) {
        this.GetVendor_Dasboard();
      }
    })

  }


  Company_logo: any;
  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }
  onRemove(event: any) {
    debugger
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
  public uploadattachments() {
    debugger
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  Save() {
    debugger
    if(this.vendor_Name==undefined||this.phone_Number==undefined||this.email_ID==undefined||this.address==undefined||this.Company_logo==undefined)
    {
      alert("Please Fill All Fields to Save!!!")
    }
else{
  var json = {
    "Vendor_Logo": this.Company_logo,
    "Vendor_Name": this.vendor_Name,
    "Phone_Number": this.phone_Number,
    "Email_ID": this.email_ID,
    "Address": this.address
  };
  this.RecruitmentServiceService.InsertVendor_Dasboard(json).subscribe(
    data => {
      debugger
      let id = data;
      Swal.fire("Saved Sucessfully");
      location.href = "#/VendorDashboard";
    })
}
   
  }

  GetVendor_Dasboard() {
    this.RecruitmentServiceService.GetVendor_Dasboard().subscribe(
      data => {
        debugger
        this.result = data;
        this.result = this.result.filter((x: { id: any; }) => x.id == Number(this.id));
        this.vendor_Logo = this.result[0].vendor_Logo;
        this.vendor_Name = this.result[0].vendor_Name;
        this.phone_Number = this.result[0].phone_Number;
        this.email_ID = this.result[0].email_ID;
        this.address = this.result[0].address;

      }
    )
  }

  Update() {
    debugger
    var json = {
      "ID": this.id,
      "Vendor_Logo": this.Company_logo,
      "Vendor_Name": this.vendor_Name,
      "Phone_Number": this.phone_Number,
      "Email_ID": this.email_ID,
      "Address": this.address
    };

    this.RecruitmentServiceService.UpdateVendor_Dasboard(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire("Update Sucessfully");
        location.href = "#/VendorDashboard";
      })
  }


  cancel() {
    location.href = "#/VendorDashboard";
  }
}
