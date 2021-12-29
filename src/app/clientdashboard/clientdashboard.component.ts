import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientdashboard',
  templateUrl: './clientdashboard.component.html',
  styleUrls: ['./clientdashboard.component.css']
})
export class ClientdashboardComponent implements OnInit {

  constructor( private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetClientMaster()
  }

  ClientMasterlist:any
  count:any;

  public GetClientMaster() {
    debugger
    this.RecruitmentServiceService.GetClientMaster().subscribe(data=>{
      debugger
      this.ClientMasterlist=data ;
      this.count = this.ClientMasterlist.length;
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
    this.RecruitmentServiceService.DeleteClientMaster(details.id).subscribe(
      data => {
        debugger        
     Swal.fire('Deleted Successfully')
     location.reload();
    })
  }

}
