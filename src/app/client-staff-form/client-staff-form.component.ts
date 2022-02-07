import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-client-staff-form',
  templateUrl: './client-staff-form.component.html',
  styleUrls: ['./client-staff-form.component.css']
})
export class ClientStaffFormComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.GetRoleType();

    this.GetClientStaff();
        this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
       this.GetClientStaff1();
     }
    })
  }

  public GetRoleType() {
    debugger
    this.RecruitmentServiceService.GetRoleType().subscribe(
      data => {
      this.ClientList = data
      this.count = this.ClientList.length;
    })

  }



  ClientStaffList:any;
  public GetClientStaff() {
    debugger
    this.RecruitmentServiceService.GetClientMaster().subscribe(data=>{
      debugger
      this.StaffList=data ;
     })
  }

  id:any;
  // Company_logo:any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;
  Role: any;
  Signature: any;
  Staff: any;
  StaffList: any;
  count: any;
  result:any;
  clientName:any;
  email:any;
  ClientList:any;
  recruiterlist:any;



  GetClientStaff1()
  {
  this.RecruitmentServiceService.GetClientStaff().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
      this.clientName=this.result[0].clientName;
      this.Role=this.result[0].role_Id;
      this.Name=this.result[0].name;
      this.PhoneNo=this.result[0].phoneNo;
      this.Email=this.result[0].email;
      this.Address = this.result[0].address;
      this.Signature = this.result[0].signature;
      this.Staff=this.result[0].clientID;
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

 

 Save() {
  debugger
  // if(this.Staff==undefined||this.Role==undefined||this.Email==undefined||this.PhoneNo==undefined||this.Address==undefined||this.Signature==undefined)
  // {
  //   alert("Please Fill All Fields to Save!!!")
  // }
  // else{
   
    var json = {
      "clientID": this.Staff,
      "role_Id": this.Role,
      "name": this.Name,
      "phoneNo": this.PhoneNo,
      "email": this.Email,
      "address": this.Address,
      "signature": this.Signature,
    };
    this.RecruitmentServiceService.InsertClientStaff(json).subscribe(
      data => {
        debugger
        let id = data;
        Swal.fire("Successfully Submitted...!!");
        location.href = "#/ClientStaffDashBoard"
      })
  // }
 
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
      alert("Signature Uploaded...!");
    })
  }



  Update() {
    debugger
    var json = {
      "clientID": this.Staff,
      "role": this.Role,
      "name": this.Name,
      "phoneNo": this.PhoneNo,
      "email": this.Email,
      "address": this.Address,
      "signature": this.Signature,  
    };

    this.RecruitmentServiceService.UpdateClientStaff(json).subscribe(
      data => {
        debugger
        let result = data;
        Swal.fire("Updated Sucessfully...");
        location.href = "#/ClientStaffDashBoard";
      })
  }

cancel(){
  location.href = "#/ClientStaffDashBoard";
}
}
