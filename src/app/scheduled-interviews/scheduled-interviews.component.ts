import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.css']
})
export class ScheduledInterviewsComponent implements OnInit {

  constructor(private RecriutmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }

  
  joblist: any;
  search: any;
  count: any;
  staffid: any;

  ngOnInit(): void {
    this.staffid = localStorage.getItem('userid');
    this.GetCandidateReg()
    // this.insertdetails()
  }

  public GetCandidateReg() {
    debugger
    if (this.staffid == undefined) {
      this.RecriutmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
        this.count = this.joblist.length;
      })
    }
    else {
      this.RecriutmentServiceService.GetCandidateRegistration().subscribe(data => {
        debugger
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0 && x.staffID == this.staffid);
        this.count = this.joblist.length;
      })

    }

  }

  id:any;
public getid(id:any){
this.id = id
}

  public Accept(id:any, rinterview:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want Accept this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        debugger
        this.RecriutmentServiceService.RejectInterview(id, 1, rinterview).subscribe(data => {
          Swal.fire(
            'Shortlisted!',
            'Candidate has been Accepted',
            'success'
          )
          this.GetCandidateReg()
        })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }




  public Reject(id:any, interview:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want Reject this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecriutmentServiceService.RejectInterview(id, 2, interview).subscribe(data => {
          Swal.fire(
            'Rejected!',
            'Candidate has been Rejected',
            'success'
          )
          this.GetCandidateReg()
        })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  rinterview:any;
public Acceptcandidate(){


  this.RecriutmentServiceService.RejectInterview(this.id, 1, this.rinterview).subscribe(data => {
    Swal.fire(
      'Shortlisted!',
      'Candidate has been Accepted',
      'success'
    )
    this.GetCandidateReg()
  })
}



public Rejecttcandidate(){


  this.RecriutmentServiceService.RejectInterview(this.id, 2, this.rinterview).subscribe(data => {
    Swal.fire(
      'Rejected!',
      'Candidate has been Rejected',
      'success'
    )
    this.GetCandidateReg()
  })
}

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }




 
}
