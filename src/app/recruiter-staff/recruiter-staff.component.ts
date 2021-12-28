import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-recruiter-staff',
  templateUrl: './recruiter-staff.component.html',
  styleUrls: ['./recruiter-staff.component.css']
})
export class RecruiterStaffComponent implements OnInit {
  Signature: any;
  recruiterlist: any;
  count: any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;
  RecruiterID: any;
 


  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetRecruiterMaster();
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
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Signature = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  public GetRecruiterMaster() {
    this.RecruitmentServiceService.GetRecruiterMaster().subscribe(
      data => {
      this.recruiterlist = data
      this.count = this.recruiterlist.length;
    })

  }

  public insertdetails() {
    debugger
    var entity = {
    'RecruiterID':this.RecruiterID,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,
      "Signature":this.Signature

    }
    this.RecruitmentServiceService.InsertRecruiterStaff(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
      location.reload();
    })
  }
}
