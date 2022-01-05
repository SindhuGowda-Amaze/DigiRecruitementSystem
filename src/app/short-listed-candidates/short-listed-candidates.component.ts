import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-short-listed-candidates',
  templateUrl: './short-listed-candidates.component.html',
  styleUrls: ['./short-listed-candidates.component.css']
})
export class ShortListedCandidatesComponent implements OnInit {

  joblist: any;
  search: any;
  stafflist: any;
  slotslist: any;
  timeid: any;
  count: any;
  DropJobList: any;
  dummjoblist:any;
  loader:any;
  roleid: any;
  userid:any;
  searchbyctc:any;
  searchbynotice:any
  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loader=true;
    // this.GetCandidateReg();
    this.GetStaffType();
    this.roleid = sessionStorage.getItem('roleid');
    this.userid=sessionStorage.getItem('userid')
    this.roleid = sessionStorage.getItem('roleid');

 
    if(this.roleid=='3'){
      debugger;

      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.dummjoblist = data.filter(x => x.accept == 1 && x.scheduled == 0 && ( x.source == 'Vendor' && x.vendor == this.userid )	) ;
        this.joblist = data.filter(x => x.accept == 1 && x.scheduled == 0 && (x.source == 'Vendor' && x.vendor == this.userid)  );
        this.loader=false;
        this.count = this.joblist.length;
      })

    }
    else {
  
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.dummjoblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
        this.joblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
        this.loader=false;
        this.count = this.joblist.length;
      })
  
    }
  }


  public GetDate(even:any) {
    this.date = even.target.value;
    this.GetSlotsMaster();
  }




  // public GetCandidateReg() {
  //   this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
  //     this.dummjoblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
  //     this.joblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
  //     this.loader=false;
  //     this.count = this.joblist.length;
  //   })

  // }

  jobid: any;


  public GetJobFilter(even:any) {
    this.jobid = even.target.value;

    // if (even.target.value != 0) {
    //   this.joblist = this.dummjoblist.filter(x=> x.jobID == this.jobid)
    // }
    // else {
    //   this.GetCandidateReg();
    // }
  }


  staffid: any;

  public GetStaffID(even:any) {
    this.staffid = even.target.value;
    this.GetSlotsMaster();
  }


  public GetStaffType() {
    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.stafflist = data;
    })

  }

  public GetTimeID(even:any) {
    this.timeid = even.target.value;
  }


  public GetSlotsMaster() {
    debugger
    this.RecruitmentServiceService.GetSlotsMasterByStaffID(this.date, this.staffid).subscribe(data => {
      this.slotslist = data;
      debugger
    })

  }

  candidateid: any;

  public GetCandidateID(candidateid:any) {
    this.candidateid = candidateid;
  }


  date: any;
  notes: any;

  public UpdateInterviewSchedule() {
    if(this.staffid==null || this.staffid==undefined || this.staffid==0 ||
      this.date==null || this.date==undefined || this.date==0 ||
      this.timeid==null || this.timeid==undefined || this.timeid==0 ||
      this.notes==null || this.notes==undefined || this.notes==0)
      {
        Swal.fire('Please Fill the Mandatory Fields')
      }
  else{
    var entity = {
      'ID': this.candidateid,
      'StaffID': this.staffid,
      'Date': this.date,
      'TimeID': this.timeid,
      'Notes': this.notes
    }
    this.RecruitmentServiceService.UpdateCandidateInterviewSchedule(entity).subscribe(data => {
      Swal.fire("Interview Scheduled Successfully");
      // this.GetCandidateReg();
    })
  }

  }
    

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }



}
