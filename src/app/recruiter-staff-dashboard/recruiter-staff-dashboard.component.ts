import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-recruiter-staff-dashboard',
  templateUrl: './recruiter-staff-dashboard.component.html',
  styleUrls: ['./recruiter-staff-dashboard.component.css']
})
export class RecruiterStaffDashboardComponent implements OnInit {
  stafflist: any;
  count: any;

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetRecruiterStaff();
  }
  public GetRecruiterStaff() {
    this.RecruitmentServiceService.GetRecruiterStaff().subscribe(
      data => {
      this.stafflist = data
      this.count = this.stafflist.length;
    })

  }

  delete(id:any){

  }
}
