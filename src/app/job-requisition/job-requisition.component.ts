import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';

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

  ngOnInit(): void {

    this.RecruitmentServiceService.UsersHr().subscribe(data => {
      this.hrlist = data;
    })
  }

  public GetHrName(even:any) {
    this.hiringmanager = even.target.value;
  }


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
        location.href = "/JobRecruitements";
      }

    })
  }

}
