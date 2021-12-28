import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-recruiter-form',
  templateUrl: './recruiter-form.component.html',
  styleUrls: ['./recruiter-form.component.css']
})
export class RecruiterFormComponent implements OnInit {
  Company_logo: any;

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
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

Name: any;
PhoneNo:any;
Email:any;
Address:any;

  public insertdetails() {
    debugger
    var entity = {
     'Logo':this.Company_logo,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,
    }
    this.RecruitmentServiceService.InsertRecruiterMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
      location.reload();
    })
  }
}
