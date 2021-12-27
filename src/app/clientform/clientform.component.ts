import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
  }

  Company_logo:any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;



  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }

  save(){
    var json = {
   
   "Logo": this.Company_logo,
   "Name": this.Name,
   "PhoneNo": this.PhoneNo,
   "Email": this.Email,
   "Address": this.Address,

 };

 this.RecruitmentServiceService.InsertClientMaster(json).subscribe(
   data => {
   debugger
   let result = data;
   location.href="/ClientDashBoard/"
 })

 alert("Mentioned PhoneNo is "+this.PhoneNo)
 alert("Mentioned Email is "+this.Email)
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

}
