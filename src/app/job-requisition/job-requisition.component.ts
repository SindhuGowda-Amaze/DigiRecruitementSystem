import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';
import { Editor } from 'ngx-editor';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-job-requisition',
  templateUrl: './job-requisition.component.html',
  styleUrls: ['./job-requisition.component.css']
})
export class JobRequisitionComponent implements OnInit {




  public jobtitile: any;
  public skills: any;
  public yearsofexp: any;
  public yearsofrelavantexp: any;
  public jobdescription: any;
  public joblocation: any;
  public noofpositions: any;
  public companyname: any;
  public package: any;
  public hiringmanager: any;
  public otherreqconditions: any;
  public resourcemanager: any;
  public hrlist: any;
 
 
  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }
   editor:any;
   html:any;
 

  
  ngOnInit(): void {
  
 
    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.hrlist = data;
    })
   
  }

  public GetHrName(even:any) {
    this.hiringmanager = even.target.value;
  }

  // public GetClientStaff() {
  //   debugger
  //   this.RecruitmentServiceService.GetClientStaff().subscribe(data=>{
  //     debugger
  //     this.hrlist=data ;
    
  //    })
  // }



  public insertdetails() {
    if(this.jobtitile==null || this.jobtitile==undefined || this.jobtitile ==0 || 
      this.skills==null || this.skills==undefined || this.skills==0 ||
      this.yearsofexp==null || this.yearsofexp==undefined || this.yearsofexp==0 ||
      this.yearsofrelavantexp==null || this.yearsofrelavantexp==undefined || this.yearsofrelavantexp==0 ||
      this.jobdescription==null || this.jobdescription==undefined || this.jobdescription==0 ||
      this.joblocation==null || this.joblocation==undefined || this.joblocation==0 ||
      this.noofpositions==null || this.noofpositions==undefined || this.noofpositions==0 ||
      this.companyname==null || this.companyname==undefined || this.companyname==0 ||
      this.package==null || this.package==undefined || this.package==0 ||
      this.hiringmanager==null || this.hiringmanager==undefined || this.hiringmanager==0 ||
      this.otherreqconditions==null || this.otherreqconditions==undefined || this.otherreqconditions==0 ||
      this.resourcemanager==null || this.resourcemanager==undefined || this.resourcemanager==0 )
      {
      Swal.fire('Please Fill the Mandatory Fields')
    }
else{

    var entity = {
      'jobTitle': this.jobtitile,
      'Skills': this.skills,
      'TotalExp': this.yearsofexp,
      'RelaventExp': this.yearsofrelavantexp,
      'JobDescription': this.jobdescription,
      'joblocation': this.joblocation,
      'Noofpositions': this.noofpositions,
      'CompanyName': this.companyname,
      'package': this.package,
      'HiringManager': this.hiringmanager,
      'OtherRequiredConditions': this.otherreqconditions,
      'ResourceManager': this.resourcemanager
    }
    this.RecruitmentServiceService.InsertJob_Requirements(entity).subscribe(data => {
      if (data != 0) {
        swal.fire("Saved Successfully");
        location.href = "#/JobRecruitements";
      }

    })
  }
  
}
}
