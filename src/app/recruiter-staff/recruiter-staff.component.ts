import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
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
  ID: any;
  roleList: any;
  roleid: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetRecruiterMaster();
    this.GetRoleType();
    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      if (this.ID != undefined && this.ID != null) {
        this.GetRecruiterStaff();
      }
    })
  }


  public GetRecruiterStaff() {
    debugger
    this.RecruitmentServiceService.GetRecruiterStaff().subscribe(
      data => {
        this.recruiterlist = data
        // this.RecruiterID = this.recruiterlist[0].recruiterName;
      
        this.Name = this.recruiterlist[0].name;
        this.PhoneNo = this.recruiterlist[0].phoneNo;
        this.Email = this.recruiterlist[0].email;
        this.Address = this.recruiterlist[0].address;
        this.Signature = this.recruiterlist[0].signature;
        // this.count = this.recruiterlist.length;
      })

  }


  public GetRoleType() {
    debugger
    this.RecruitmentServiceService.GetRoleType().subscribe(
      data => {
        this.roleList = data
        this.count = this.roleList.length;
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
      this.Signature = res;
      alert("ATTACHMENT UPLOADED");
    })
  }


  public GetRecruiterMaster() {
    debugger
    this.RecruitmentServiceService.GetRecruiterMaster().subscribe(
      data => {
        this.recruiterlist = data.filter(x => x.id == this.ID)
        this.count = this.recruiterlist.length;
      })

  }

  public insertdetails() {
    debugger
    if( this.roleid==undefined||this.roleid==null|| 
      this.Name==undefined||this.Name==null||
      this.PhoneNo==undefined||this.PhoneNo==null||
      this.Email==undefined||this.Email==null||
      this.Address==undefined||this.Address==null||
      this.Signature==undefined||this.Signature==null)
      {
      Swal.fire("Please fill all fields!!");
    }
    else{
      var entity = {
        'recruiterID':'4',
        'name': this.Name,
        'phoneNo': this.PhoneNo,
        'email': this.Email,
        'address': this.Address,
        "signature": this.Signature,
        "roleId": this.roleid
  
      }
      this.RecruitmentServiceService.InsertRecruiterStaff(entity).subscribe(data => {
        if (data != 0) {
          Swal.fire("Registered Successfully");
        }
        location.href = "#/RecruiterStaffDashboard";
      })
    }
  
  }


  public Update() {
    debugger
    var entity = {
      'ID': this.ID,
      'recruiterID':'4',
      'name': this.Name,
      'phoneNo': this.PhoneNo,
      'email': this.Email,
      'address': this.Address,
      "signature": this.Signature,
      "roleId": this.roleid

    }
    this.RecruitmentServiceService.UpdateRecruiterStaff(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Updated Recruiter Staff Successfully");
        // location.reload();
        location.href = "#/RecruiterStaffDashboard";
      }
    })
  }

  cancel() {
    location.href = "#/RecruiterStaffDashboard"
  }
}
