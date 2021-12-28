import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sourcing-staff-form',
  templateUrl: './sourcing-staff-form.component.html',
  styleUrls: ['./sourcing-staff-form.component.css']
})
export class SourcingStaffFormComponent implements OnInit {
  ID: any;
  sourceList: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetSourcigStaff();
    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      if (this.ID != undefined && this.ID != null) {
        this.GetSourcigStaff();
      }
    })
  }

  public GetSourcigStaff() {
    this.RecruitmentServiceService.GetSourcigStaff().subscribe(
      data => {
        this.sourceList = data
        this.SourcingID = this.sourceList[0].sourcingID;
        this.Signature = this.sourceList[0].signature;
        this.Name = this.sourceList[0].name;
        this.PhoneNo = this.sourceList[0].phoneNo;
        this.Email = this.sourceList[0].email;
        this.Address = this.sourceList[0].address;

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
  Signature: any;
  recruiterlist: any;
  count: any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;
  SourcingID: any;
  public uploadattachments() {
    debugger
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Signature = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

  // public GetSourcingMaster() {
  //   this.RecruitmentServiceService.GetSourcingMaster().subscribe(
  //     data => {
  //       this.recruiterlist = data
  //       this.count = this.recruiterlist.length;
  //     })

  // }
  public insertdetails() {
    debugger
    var entity = {
      'SourcingID': this.SourcingID,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,
      "Signature": this.Signature

    }
    this.RecruitmentServiceService.InsertSourcigStaff(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
      location.reload();
    })
  }

  public updateSource() {
    debugger
    var entity = {
      'ID': this.ID,
      'SourcingID': this.SourcingID,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,
      "Signature": this.Signature

    }
    this.RecruitmentServiceService.UpdateSourcingStaff(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Updates Source Staff Successfully");
      }
      location.reload();
    })
  }
}
