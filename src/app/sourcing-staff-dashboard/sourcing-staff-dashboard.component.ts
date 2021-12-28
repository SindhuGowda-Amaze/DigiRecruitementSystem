import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-sourcing-staff-dashboard',
  templateUrl: './sourcing-staff-dashboard.component.html',
  styleUrls: ['./sourcing-staff-dashboard.component.css']
})
export class SourcingStaffDashboardComponent implements OnInit {
  stafflist: any;
  count: any;
  staff: any;

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  ngOnInit(): void {
    this.GetSourcigStaff() ;
  }
  public GetSourcigStaff() {
    this.RecruitmentServiceService.GetSourcigStaff().subscribe(
      data => {
      this.stafflist = data
      this.count = this.stafflist.length;
    })

  }

  delete(id:any){
    this.RecruitmentServiceService.DeleteSourcigStaff(id).subscribe(
      data => {
        debugger
        Swal.fire('Deleted');
        this.GetSourcigStaff();
  })
  }

  Update(id:any) {
    location.href = "/SourcingStaffForm/" + id
  }
}
