import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-sourcing-dashboard',
  templateUrl: './sourcing-dashboard.component.html',
  styleUrls: ['./sourcing-dashboard.component.css']
})
export class SourcingDashboardComponent implements OnInit {
  recruiterlist: any;
  count: any;
  recuiter: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetSourcingMaster();
  }
  public GetSourcingMaster() {
    this.RecruitmentServiceService.GetSourcingMaster().subscribe(
      data => {
        this.recruiterlist = data
        this.count = this.recruiterlist.length;
      })

  }

  delete(id: any) {
    this.RecruitmentServiceService.DeleteSourcingMaster(id).subscribe(
      data => {
        debugger
        Swal.fire('Deleted');
        this.GetSourcingMaster();
      }
    )
  }

  Update(id:any) {
    location.href = "/SourcingForm/" + id
  }
}
