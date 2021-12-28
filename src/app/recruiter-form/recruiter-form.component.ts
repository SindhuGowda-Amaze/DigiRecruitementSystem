import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recruiter-form',
  templateUrl: './recruiter-form.component.html',
  styleUrls: ['./recruiter-form.component.css']
})
export class RecruiterFormComponent implements OnInit {
  Company_logo: any;
  ID: any;
  recruiterlist: any;
  
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      if (this.ID != undefined && this.ID!=null) {
        this.GetRecruiterMaster();
      }
    })
  }

  public GetRecruiterMaster() {
    this.RecruitmentServiceService.GetRecruiterMaster().subscribe(
      data => {
        this.recruiterlist = data
        this.Company_logo=this.recruiterlist[0].logo;
        this.Name=this.recruiterlist[0].name;
        this.PhoneNo=this.recruiterlist[0].phoneNo;
        this.Email=this.recruiterlist[0].email;
        this.Address=this.recruiterlist[0].address;
        
        // this.count = this.recruiterlist.length;
      })

  }



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


  public insertdetails() {
    debugger
    var entity = {
      'Logo': this.Company_logo,
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


  public updateRecruiter() {
    debugger;
    var entity = {
        'Logo': this.Company_logo,
        'Name': this.Name,
        'PhoneNo': this.PhoneNo,
        'EmailID': this.Email,
        'Address': this.Address, 
    }
    this.RecruitmentServiceService.UpdateRecruiterMaster(entity).subscribe(data => {
      Swal.fire('Recruiter Updated Successfully.');
      location.href = "/RecruiterDashboard";

    })
  }
}
