import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-shortlisted-candidates-reports',
  templateUrl: './shortlisted-candidates-reports.component.html',
  styleUrls: ['./shortlisted-candidates-reports.component.css']
})
export class ShortlistedCandidatesReportsComponent implements OnInit {
  joblist: any;
  search: any;
  stafflist: any;
  slotslist: any;
  timeid: any;
  count: any;
  DropJobList: any;
  loader:any;
  constructor(private RecruitmentServiceService: RecruitmentServiceService) { }

  ngOnInit(): void {
    this.loader=true;
    this.GetCandidateReg();
    this.GetStaffType();
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.DropJobList = data;
      this.loader=false;

    })
  }
  refresh(){
    location.reload();
  }

  public GetDate(even:any) {
    this.date = even.target.value;
    this.GetSlotsMaster();
  }


  dummjoblist: any;


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

    if (even.target.value != 0) {
      this.joblist = this.dummjoblist.filter((x: { jobID: any; }) => x.jobID == this.jobid)
    }
    else {
      this.GetCandidateReg();
    }
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

  public GetOfferLetter(offer: any) {
    window.open(offer, "_blank")
  }



}
