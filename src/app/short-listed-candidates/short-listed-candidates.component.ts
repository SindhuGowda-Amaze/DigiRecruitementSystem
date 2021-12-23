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
  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.GetCandidateReg();
    this.GetStaffType();
  }

  

  public GetDate(even:any) {
    this.date = even.target.value;
    this.GetSlotsMaster();
  }




  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.dummjoblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.joblist = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.count = this.joblist.length;
    })

  }

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
    this.RecruitmentServiceService.GetStaffs().subscribe(data => {
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
    var entity = {
      'ID': this.candidateid,
      'StaffID': this.staffid,
      'Date': this.date,
      'TimeID': this.timeid,
      'Notes': this.notes
    }
    this.RecruitmentServiceService.UpdateCandidateInterviewSchedule(entity).subscribe(data => {
      Swal.fire("Interview Scheduled Successfully");
      this.GetCandidateReg();
    })
  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }



}
