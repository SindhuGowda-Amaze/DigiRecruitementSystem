import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-selected-candidates',
  templateUrl: './selected-candidates.component.html',
  styleUrls: ['./selected-candidates.component.css']
})
export class SelectedCandidatesComponent implements OnInit {
  roleid:any

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }


 
  joblist: any;
  count: any;
  search: any;
  date: any;
  loader:any;
  dummjoblist:any;
  ngOnInit(): void {
    this.GetCandidateReg()
    this.roleid = sessionStorage.getItem('roleid');
    this.loader=true;
  }

  public GetCandidateReg() {
    debugger
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
       this.joblist = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
      this.dummjoblist = data.filter(x => x.interviewSelected == 1 && x.offered == 0);
     
      this.loader=false;
      this.count = this.joblist.length;
    })

  }

  candidateid: any;
  candidatename: any;


  public GetOfferID(id:any, job:any) {
    this.candidateid = id;
    this.candidatename = job.candidateName,
      this.email = job.email
  }
  public GetOfferLetter(offer:any) {
    window.open(offer, "_blank")
  }

  offernotes: any;

  Company_logo:any;
  TentativeDate:any;

  files: File[] = [];
  onSelect(event: { addedFiles: any; }) {
    debugger
    console.log(event);
    this.files.push(event.addedFiles[0]);
    this.uploadattachments();
    console.log("content", this.files);
  }


  onRemove(event:any)
  {
debugger
console.log(event);
this.files.splice(this.files.indexOf(event),1);
  }

  public uploadattachments() {
    debugger
    this.RecruitmentServiceService.UploadImages(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }



  public updatedetails() {

    if(this.Company_logo==null || this.Company_logo==undefined || this.Company_logo==0 ||
      this.offernotes==null || this.offernotes==undefined || this.offernotes==0 ||
      this.TentativeDate==null || this.TentativeDate==undefined || this.TentativeDate==0)
      {
        Swal.fire('Please Fill the Mandatory Fields')
      }

    else{
      debugger;
    var entity = {
      'ID': this.candidateid,
      'OfferLetterUrl': this.Company_logo,
      'OfferNotes': this.offernotes,
      'TentativeDate': this.TentativeDate
    }
    this.RecruitmentServiceService.UpdateOfferLetter(entity).subscribe(data => {
      Swal.fire("Candidate Offered Successfully");
      this.sendmail()
    })

    }
    
  }

  joiningbonus: any;
  Notes: any;
  noticeperiodbythen: any;
  searchbynotice:any



  public updatejoiningdate() {
    if(this.date==null || this.date==undefined || this.date==0 ||
      this.joiningbonus==null || this.joiningbonus==undefined || this.joiningbonus==0 ||
      this.noticeperiodbythen==null || this.noticeperiodbythen==undefined || this.noticeperiodbythen==0 ||
      this.Notes==null || this.Notes==undefined || this.Notes==0)
      {
        Swal.fire('Please Fill the Mandatory Fields')
      }
    else{
      var entity = {
        'ID': this.candidateid,
        'JoiningDate': this.date,
        'JoiningBonus': this.joiningbonus,
        'NoticePeriodByThen': this.noticeperiodbythen,
        'Commentss': this.Notes
      }
      this.RecruitmentServiceService.UpdateCandidateJoiningDate(entity).subscribe(data => {
        Swal.fire("Saved Successfully");
        this.date = "";
        this.joiningbonus = "";
        this
      })

    }
    
  }
  
  emailattchementurl = [];
  public email: any;
  public doctorname: any;

  public sendmail() {

    var entity = {
      'emailto': this.email,
      'emailsubject': "Amaze Inc Offer Letter",
      'emailbody': 'Dear ' + this.candidatename + ',' + "<br><br>" + this.offernotes,
      'attachmenturl': this.Company_logo,
      'cclist': 0,
      'bcclist': 0
    }
    this.RecruitmentServiceService.sendemail(entity).subscribe(data => {
    })
  }

  Date:any;
  userid:any;
  // public GetDate(event:any) {
  //   if(this.Date==0){
  //     debugger
  //     this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
  //       this.joblist = data.filter(x => x.recruiter == this.userid);
  //       this.count = this.joblist.length;
  //     })
  //   }
  //   else{
  //     debugger
  //     this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
  //       this.joblist = data.filter(x => x.recruiter == this.userid && x.date==this.Date);
      
  //       this.count = this.joblist.length;
  //     })
  //   }
    
  // }

  public GetDate(event: any) {
    if (this.Date == 0) {
      debugger
      this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.joblist = data;
        debugger
        this.dummjoblist = data;
        this.count = this.joblist.length;
      })
    }
    else {
      debugger
      this.joblist = this.dummjoblist.filter((x: { date: any; }) => x.date == this.Date);
      this.count = this.joblist.length;
    }
  }
}
