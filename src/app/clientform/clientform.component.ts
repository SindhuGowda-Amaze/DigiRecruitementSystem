import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.css']
})
export class ClientformComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.GetClientMaster();
        this.ActivatedRoute.params.subscribe(params=>{
      debugger
     this.id=params["id"];
     if(this.id!=null&&this.id!=undefined){
       this.GetClientMaster();
     }
    })
  }


  GetClientMaster()
  {
  this.RecruitmentServiceService.GetClientMaster().subscribe(
    data => {
      debugger
      this.result = data;
      this.result=this.result.filter((x: {id: any;})=>x.id==Number(this.id));
      this.Staff=this.result[0].clientID;
      
      
      this.Company_logo=this.result[0].company_logo;
      this.Name=this.result[0].name;
      this.PhoneNo=this.result[0].phoneNo;
      this.Email=this.result[0].email;
      this.Address=this.result[0].address;
    })
  }


  id:any;
  Company_logo:any;
  Name: any;
  PhoneNo: any;
  Email: any;
  Address: any;
  Staff: any;
  result: any;
  



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
   location.href="/ClientForm/"
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
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }

  Update(){
    debugger
     var json = {
      "Logo": this.Company_logo,
      "Name": this.Name,
      "PhoneNo": this.PhoneNo,
      "Email": this.Email,
      "Address": this.Address, 
      };
    
      this.RecruitmentServiceService.UpdateClientMaster(json).subscribe(
        data => {
        debugger
        let result = data;
        Swal.fire("Updated Sucessfully...!");
      // location.href="/Department";
      })
    }

}
