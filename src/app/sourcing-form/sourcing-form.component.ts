import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-sourcing-form',
  templateUrl: './sourcing-form.component.html',
  styleUrls: ['./sourcing-form.component.css']
})
export class SourcingFormComponent implements OnInit {
  Company_logo: any;
  Sourcelist: any;
  ID: any;
  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetSourcingMaster();
    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      if (this.ID != undefined && this.ID != null) {
        this.GetSourcingMaster();
      }
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
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;

  public insertdetails() {
    debugger
    var entity = {
      'Logo': this.Company_logo,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,

    }
    this.RecruitmentServiceService.InsertSourcigMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
      location.reload();
    })
  }

  public GetSourcingMaster() {
    this.RecruitmentServiceService.GetSourcingMaster().subscribe(
      data => {
        this.Sourcelist = data
        this.Company_logo = this.Sourcelist[0].logo;
        this.Name = this.Sourcelist[0].name;
        this.PhoneNo = this.Sourcelist[0].phoneNo;
        this.Email = this.Sourcelist[0].email;
        this.Address = this.Sourcelist[0].address;

        // this.count = this.recruiterlist.length;
      })

  }

  public updateSource() {
    debugger
    var entity = {
      'ID': this.ID,
      'Logo': this.Company_logo,
      'Name': this.Name,
      'PhoneNo': this.PhoneNo,
      'Email': this.Email,
      'Address': this.Address,

    }
    this.RecruitmentServiceService.UpdateSourcingMaster(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Updated Source Successfully");
      }
      location.reload();
    })
  }
}
