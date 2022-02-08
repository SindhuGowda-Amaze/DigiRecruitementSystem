import { Component, OnInit } from '@angular/core';
import { RecruitmentServiceService } from '../recruitment-service.service';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-applied-candidates-reports',
  templateUrl: './applied-candidates-reports.component.html',
  styleUrls: ['./applied-candidates-reports.component.css']
})
export class AppliedCandidatesReportsComponent implements OnInit {

  constructor(private RecruitmentServiceService: RecruitmentServiceService,private ActivatedRoute:ActivatedRoute) { }
  joblist: any;
  count: any;
  DropJobList: any;
  dummjoblist: any;
  term: any;
  loader:any;
  searchbyctc:any;
  roleid:any;
  userid:any;
  hrlist:any;
  hiringManager:any;
  search:any
  p: any = 1;
  count1: any = 5;
  searchbynotice:any;
  noticeperiodlist:any;
  jobListCopy:any;
  ngOnInit(): void {
    this.hiringManager="";
    this.searchbynotice="";
    this.roleid = sessionStorage.getItem('roleid');
    
    this.userid=sessionStorage.getItem('userid')
    
    this.RecruitmentServiceService.GetClientStaff().subscribe(data => {
      this.hrlist = data;
    })
    this.loader=true;
    this.GetCandidateReg()
    
  }
  refresh(){
    location.reload();
  }
  
  public GetCandidateReg() {
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.dummjoblist = data.filter(x => x.accept == 0 && x.reject == 0)
      this.joblist = data.filter(x => x.accept == 0 && x.reject == 0);
      this.jobListCopy=this.joblist
      this.noticeperiodlist = data.filter(x => x.accept == 1 && x.scheduled == 0);
      this.loader=false;
      this.count = this.joblist.length;
    })


    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      this.DropJobList = data;
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

  fileName = 'APPLIED CANDIDATES REPORT.xlsx';
  exportexcel(): void {
    this.loader = false;
    /* table id is passed over here */
    let element = document.getElementById('downloadaplication');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Applied Candidates');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
    this.loader = false;
  }

  
  public GetJobRequirements(){
  
  
    this.RecruitmentServiceService.GetJob_Requirements().subscribe(data => {
      debugger
     
      this.joblist = data.filter(x => x.vendor == null && x.hiringManager == this.hiringManager);
     
      this.count = this.joblist.length;
   
  
    })
  }

  public GetOfferLetter(offer:any) {
    
    window.open(offer, "_blank")
  }

  public changeoption() {
    debugger;
  
    this.RecruitmentServiceService.GetCandidateRegistration().subscribe(data => {
      this.joblist = data.filter(x => (x.accept == 1 && x.scheduled == 0) &&  (x.noticePeriod == this.searchbynotice));
    });
  }

  public Filterjobs() {
    debugger
    let termcopy = this.term.toLowerCase();
    this.joblist = this.jobListCopy.filter((x: { jobRefernceID: string,jobTitle: string; }) => x.jobRefernceID.toString().includes(termcopy)||x.jobTitle.toLowerCase().includes(termcopy));
  }
}
