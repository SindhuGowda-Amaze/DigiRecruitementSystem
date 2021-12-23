import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { RecruitmentServiceService } from '../recruitment-service.service';
@Component({
  selector: 'app-job-vacancies',
  templateUrl: './job-vacancies.component.html',
  styleUrls: ['./job-vacancies.component.css']
})
export class JobVacanciesComponent implements OnInit {
  servingnotice: any;
  relocate: any;

  constructor(private RecruitmentServiceService: RecruitmentServiceService, private fb: FormBuilder) { }
  joblist: any;
  candidatename: any;
  phoneno: any;
  email: any;
  yearsofexp: any;
  relaventexp: any;
  city: any;
  jobid: any;



  ngOnInit(): void {
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.joblist = data;
    })
  }


  attachments = []
  attachmentsurl: any;
  brochures = [];
  imagesurl: any;
  brochures1 = [];
  addedFiles = [];
  public onattachmentUpload(abcd:any) {
    debugger;
    // this.attachments.push(abcd.addedFiles[0]);
    this.uploadImages();
    abcd.length = 0;
  }
  public uploadImages() {
    debugger;
    this.RecruitmentServiceService.UploadImages(this.attachments).subscribe(res => {
      debugger
      // this.brochures1.push(res);
      // let a = this.brochures1[0].slice(2);
      // this.attachmentsurl = 'http://14.192.17.225' + a;
      debugger
      this.attachmentsurl='assets/images/pdf.png';
      Swal.fire("Added Successfully");

    });
  }

  public GetJobID(jobid:any) {
    this.jobid = jobid;
  }

  currentcompany: any;
  noticeperiod: any;
  // servingnotice: boolean;
  // relocate: boolean;


  public insertdetails() {
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
      'ServingNotice': this.servingnotice,
      'Relocate': this.relocate
    }
    this.RecruitmentServiceService.InsertCandidateRegistration(entity).subscribe(data => {
      if (data != 0) {
        Swal.fire("Registered Successfully");
      }
    })
  }
}


