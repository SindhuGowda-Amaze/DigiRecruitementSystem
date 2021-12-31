import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-applied-candidates',
  templateUrl: './applied-candidates.component.html',
  styleUrls: ['./applied-candidates.component.css']
})
export class AppliedCandidatesComponent implements OnInit {

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute ) { }
  joblist: any;
  count: any;
  DropJobList: any;
  dummjoblist: any;
  term: any;
  jobid: any;
  search:any;
  roleid: any;
  loader:any;
  userid:any;


  ngOnInit(): void {
  
    this.userid=sessionStorage.getItem('userid')
    this.roleid = sessionStorage.getItem('roleid');
    
    this.userid=sessionStorage.getItem('userid')
    
 
 
    if(this.roleid=='3'){
      debugger;
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.dummjoblist = data.filter(x => (x.accept == 0 && x.reject == 0) || x.source == "Vendor" && x.vendor == this.userid )
        this.joblist = data.filter(x => (x.accept == 0 && x.reject == 0 ) || x.source == "Vendor" && x.vendor == this.userid);
      
        this.count = this.joblist.length;
      })
  

 
  
    }
    else {
  
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.dummjoblist = data.filter(x => x.accept == 0 && x.reject == 0 )
        this.joblist = data.filter(x => x.accept == 0 && x.reject == 0);
      
        this.count = this.joblist.length;
      })
  
    }
    // this.GetCandidateReg();
 
  }

  // public GetCandidateReg() {
  
  //   this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
  //     this.dummjoblist = data.filter(x => x.accept == 0 && x.reject == 0 )
  //     this.joblist = data.filter(x => x.accept == 0 && x.reject == 0);
    
  //     this.count = this.joblist.length;
  //   })


  //   this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
  //     this.DropJobList = data;

  //   })

  // }
  public Ondelete(id:any) {
    // this.DigipayrollServiceService.DeleteBanks(id).subscribe(
    //   data => {
    //     debugger
       Swal.fire('Deleted');
    //     this.GetBanks();
    //   }
    // )
  }

  public Accept(id:any, shortlistionNotes:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want Shortlist this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.UpdateCandidateRegistrationAcceptReject(id, 1, shortlistionNotes).subscribe(data => {
          Swal.fire(
            'Shortlisted!',
            'Candidate has been shortlisted',
            'success'
          )
          // this.GetCandidateReg()
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

  public GetOfferLetter(offer:any) {
    
    window.open(offer, "_blank")
  }

  public Reject(id:any, shortlistionNotes:any) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want Reject this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Accept it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.RecruitmentServiceService.UpdateCandidateRegistrationAcceptReject(id, 2, shortlistionNotes).subscribe(data => {
          Swal.fire(
            'Rejected!',
            'Candidate has been Rejected',
            'success'
          )
          // this.GetCandidateReg()
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
}
