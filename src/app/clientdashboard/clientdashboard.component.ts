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

  public GetClientMaster() {
    debugger
    this.RecruitmentServiceService.GetClientMaster().subscribe(data=>{
      debugger
      this.ClientMasterlist=data ;
     })
  }

}
