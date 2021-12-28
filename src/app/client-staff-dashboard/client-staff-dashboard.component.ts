import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-staff-dashboard',
  templateUrl: './client-staff-dashboard.component.html',
  styleUrls: ['./client-staff-dashboard.component.css']
})
export class ClientStaffDashboardComponent implements OnInit {

  constructor( private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetClientStaff()
  }

  ClientStaffList:any

  public GetClientStaff() {
    debugger
    this.RecruitmentServiceService.GetClientStaff().subscribe(data=>{
      debugger
      this.ClientStaffList=data ;
     })
  }

  edit(details: any){
    debugger
    location.href="/ClientStaffForm/"+ details;
    }

 
  delete(details: any){
    var json={
      "ID":details.id
    }
    this.RecruitmentServiceService.DeleteClientStaff(details.id).subscribe(
      data => {
        debugger        
     Swal.fire('Deleted Successfully')
     location.reload();
    })
  }

}
