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

  count: any;
  search:any;
  loader:any;
  constructor( private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   this.GetClientMaster()
   this.loader=true;
  }

  ClientMasterlist:any


  public GetClientMaster() {
    debugger
  
    this.RecruitmentServiceService.GetClientMaster().subscribe(data=>{
      debugger
      this.ClientMasterlist=data ;
      this.loader=false;
      this.count = this.ClientMasterlist.length;
     })
  }

  edit(details: any){
    debugger
    location.href="#/ClientForm/"+ details;
    

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
