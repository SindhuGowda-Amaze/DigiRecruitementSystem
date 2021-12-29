import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-recruiter-staff-dashboard',
  templateUrl: './recruiter-staff-dashboard.component.html',
  styleUrls: ['./recruiter-staff-dashboard.component.css']
})
export class RecruiterStaffDashboardComponent implements OnInit {
  stafflist: any;
  count: any;
  search:any;

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
    this.RecruitmentServiceService.DeleteRecruiterStaff(id).subscribe(
      data => {
        debugger
        Swal.fire('Deleted');
        this.GetRecruiterStaff();
  })
}

  

Update(staff:any) {
  location.href = "/RecruiterStaff/" + staff.id
}
}
