import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';
import { Editor } from 'ngx-editor';




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
