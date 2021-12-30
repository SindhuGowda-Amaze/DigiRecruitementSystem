import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-dropped-candidates',
  templateUrl: './dropped-candidates.component.html',
  styleUrls: ['./dropped-candidates.component.css']
})
export class DroppedCandidatesComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  OfferComments: any;
  joblist: any;
  count: any;
  term: any;
  search:any;
  loader:any;
  ngOnInit(): void {
    this.loader=true;
    this.GetCandidateReg()
  }


  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist = data.filter(x => x.offerAcceptreject == 2);
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }





  public Accept(id:any, comments:any) {
    swal.fire({
      title: 'Are you sure?',
      text: 'Candidate joined!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Joined it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.AcceptRejectOffer(id, 1, comments).subscribe(data => {
          swal.fire(
            'Joined!',
            'Candidate has Joined',
            'success'
          )
          this.GetCandidateReg()
        })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }


  public Reject(id:any, comments:any) {
    swal.fire({
      title: 'Are you sure?',
      text: 'Candidate has dropped!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, dropped!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.AcceptRejectOffer(id, 2, comments).subscribe(data => {
          swal.fire(
            'Rejected!',
            'Candidate has dropped',
            'success'
          )
          this.GetCandidateReg()
        })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  

}
