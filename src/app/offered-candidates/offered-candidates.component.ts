import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';


@Component({
  selector: 'app-offered-candidates',
  templateUrl: './offered-candidates.component.html',
  styleUrls: ['./offered-candidates.component.css']
})
export class OfferedCandidatesComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService) { }

  p: any = 1;
  count1: any = 5;

  OfferComments: any;
  joblist: any;
  count: any;
  term: any;
  search:any;
  roleid:any;
  loader:any;
  jobListCopy:any;
  Date:any;
  hrlist:any;
  username:any;
  ngOnInit(): void {
    this.GetCandidateReg()
    this.roleid = sessionStorage.getItem('roleid');
    this.loader=true;
    this.username = sessionStorage.getItem('UserName');
    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.hrlist = data;
    })
  }



  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      if(this.roleid==2){
        this.joblist = data.filter(x => x.offered == 1 && x.offerAcceptreject == 0 && x.hiringManager==this.username);
      }
      else
      {
        this.joblist = data.filter(x => x.offered == 1 && x.offerAcceptreject == 0);
      this.jobListCopy = this.joblist
      }

     
      
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }



  public Filterjobs() {
    debugger
    let searchCopy = this.search.toLowerCase();
    this.joblist = this.jobListCopy.filter((x: { jobRefernceID: string,jobTitle: string; }) => x.jobRefernceID.toString().includes(searchCopy)||x.jobTitle.toLowerCase().includes(searchCopy));
  }

  
public changeAnniversary() {
  debugger;

  this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {

    this.joblist = data.filter(x => x.tentativeDate == this.Date + "T00:00:00");
  });
}


  public Accept(id:any, comments:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Candidate joined!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Joined it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.AcceptRejectOffer(id, 1, comments).subscribe(data => {
          Swal.fire(
            'Joined!',
            'Candidate has Joined',
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


  public Reject(id:any, comments:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Candidate has dropped!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, dropped!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.AcceptRejectOffer(id, 2, comments).subscribe(data => {
          Swal.fire(
            'Rejected!',
            'Candidate has dropped',
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


  hiringManager:any;
  public GetJobRequirements(){
  
  
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      debugger
     
      this.joblist = data.filter(x => x.vendor == null && x.hiringManager == this.hiringManager);
     
      this.count = this.joblist.length;
   
  
    })
  
   
  
  
  }

}
