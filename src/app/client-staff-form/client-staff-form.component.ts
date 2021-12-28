import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-client-staff-form',
  templateUrl: './client-staff-form.component.html',
  styleUrls: ['./client-staff-form.component.css']
})
export class ClientStaffFormComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetClientMaster();
    //     this.ActivatedRoute.params.subscribe(params=>{
    //   debugger
    //  this.id=params["id"];
    //  if(this.id!=null&&this.id!=undefined){
    //    this.GetClientStaff1();
    //  }
    // })
  }
  id:any;
  // Company_logo:any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;
  Signature: any;
  Staff: any;
  StaffList: any;
  count: any;
  result:any;
  clientName:any;
  email:any;
  // GetClientStaff1()
  // {
  // this.RecruitmentServiceService.GetClientStaff().subscribe(
  //   data => {
  //     debugger
  //     this.result = data;
  //     this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
  //     this.Staff=this.result[0].clientID;
      
      
  //     this.Name=this.result[0].name;
  //     this.PhoneNo=this.result[0].phoneNo;
  //     this.Email=this.result[0].email;
  //     this.Address=this.result[0].address
  //   })
  // }


  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }

  public GetClientMaster() {
    debugger
    this.RecruitmentServiceService.GetClientMaster().subscribe(data=>{
      debugger
      this.StaffList=data ;
     })
  }


  save(){
    var json = {

   "ClientID": this.Staff,
   "Name": this.Name,
   "PhoneNo": this.PhoneNo,
   "Email": this.Email,
   "Address": this.Address,
   "Signature": this.Signature,

 };

 this.RecruitmentServiceService.InsertClientStaff(json).subscribe(
   data => {
   debugger
   let result = data;
   location.href="/ClientStaffDashBoard/"
 })

 alert("Mentioned PhoneNo is "+this.PhoneNo)
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



Update(){
    debugger
     var json = {
      "ClientID": this.Staff,
      "Name": this.Name,
      "PhoneNo": this.PhoneNo,
      "Email": this.Email,
      "Address": this.Address,
      "Signature": this.Signature,  
      };
    
      this.RecruitmentServiceService.UpdateClientStaff(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Updated Sucessfully...!");
      // location.href="/Department";
      })
    }
}
