import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-recruiter-dashboard',
  templateUrl: './recruiter-dashboard.component.html',
  styleUrls: ['./recruiter-dashboard.component.css']
})
export class RecruiterDashboardComponent implements OnInit {
  recuiter:any;
  recruiterlist: any;
  count: any;
  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetRecruiterMaster(); 
  }


  public GetRecruiterMaster() {
    this.RecruitmentServiceService.GetRecruiterMaster().subscribe(
      data => {
      this.recruiterlist = data
      this.count = this.recruiterlist.length;
    })

  }

  delete(id:any){

  }
}
