import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-manager-dash',
  templateUrl: './manager-dash.component.html',
  styleUrls: ['./manager-dash.component.css']
})
export class ManagerDashComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute) { }
  joblist: any;
  search: any;
  count: any;
  date: any;
  loader: any;
  p: any = 1;
  count1: any = 5;
  dummjoblist1: any;
  Userlist: any;
  Hired: any;
  hrlist: any;
  roleid: any;
  NoofpositionsHired: any;
  dropdownSettings1: any = {};
  dropdownList1: any = [];
  username: any;
  jobListCopy: any;
  dummjoblist: any;
  ID: any;
  ngOnInit(): void {

    this.roleid = sessionStorage.getItem('roleid');
    this.username = sessionStorage.getItem('UserName'); 
    this.loader = true;

    
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      if (this.roleid == 2) {
        this.joblist = data.filter(x => x.hiringManager == this.username);
      }
      else {
        this.joblist = data;
      }

      this.jobListCopy = this.joblist
      this.dummjoblist = data;
      this.dummjoblist1 = data.filter(x => x.ID == this.ID);
      this.loader = false;
      debugger
      this.count = this.joblist.length;
    })
  }
}