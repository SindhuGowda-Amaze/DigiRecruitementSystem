import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-job-vacancies',
  templateUrl: './job-vacancies.component.html',
  styleUrls: ['./job-vacancies.component.css']
})
export class JobVacanciesComponent implements OnInit {
  Company_logo: any;
  ID:any;

  constructor(private RecruitmentServiceService:RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.ActivatedRoute.params.subscribe(params => {
      this.ID = params['id'];
      this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
        this.joblist = data.filter(x=>x.id==this.ID);
    })
    }
    )


}
  // files: File[] = [];

  // onSelect(event: any) {
  //   console.log(event);
  //   this.files.push(...event.addedFiles);
  // }
  
  // onRemove(event:any) {
  //   console.log(event);
  //   this.files.splice(this.files.indexOf(event), 1);
  // }

  attachments = []
  attachmentsurl: any;
  brochures = [];
  imagesurl: any;
  brochures1 = [];
  jobid:any;
  
  public GetJobID(jobid:any) {
    this.jobid = jobid;
  }

  

  currentcompany: any;
  noticeperiod: any;
  servingnotice: any;
  relocate: any;
  joblist: any;
  candidatename: any;
  phoneno: any;
  email: any;
  yearsofexp: any;
  relaventexp: any;
  city: any;
  ctc:any;
 


  public insertdetails() {
    debugger
    var entity = {
      'JobID': this.jobid,
      'CandidateName': this.candidatename,
      'PhoneNo': this.phoneno,
      'Email': this.email,
      'YearsofExp': this.yearsofexp,
      'RelavantExp': this.relaventexp,
      'City': this.city,
      'ResumeUrl': this.brochures1[0],
      'CurrentCompany': this.currentcompany,
      'NoticePeriod': this.noticeperiod,
      'ctc': this.ctc,
      'ServingNotice': this.servingnotice,
      'Relocate': this.relocate
    }
    this.RecruitmentServiceService.InsertCandidateRegistration(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
    })
  }

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
    this.RecruitmentServiceService.AttachmentsUpload(this.files).subscribe(res => {
      debugger
      this.Company_logo = res;
      alert("ATTACHMENT UPLOADED");
    })
  }
}
