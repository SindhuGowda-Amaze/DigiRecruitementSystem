import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-sourcing-dashboard',
  templateUrl: './sourcing-dashboard.component.html',
  styleUrls: ['./sourcing-dashboard.component.css']
})
export class SourcingDashboardComponent implements OnInit {
  recruiterlist: any;
  count: any;

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
  }
  public GetSourcingMaster() {
    this.RecruitmentServiceService.GetSourcingMaster().subscribe(
      data => {
      this.recruiterlist = data
      this.count = this.recruiterlist.length;
    })

  }

  delete(id:any){

  }
}
