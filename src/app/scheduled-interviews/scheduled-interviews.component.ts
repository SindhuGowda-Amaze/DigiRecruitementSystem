import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruitmentServiceService } from '../recruitment-service.service';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { FullCalendarOptions, EventObject } from 'ngx-fullcalendar';

@Component({
  selector: 'app-scheduled-interviews',
  templateUrl: './scheduled-interviews.component.html',
  styleUrls: ['./scheduled-interviews.component.css']
})
export class ScheduledInterviewsComponent implements OnInit {

  constructor(private RecriutmentServiceService: RecruitmentServiceService, private ActivatedRoute: ActivatedRoute, private datePipe: DatePipe) { }

  options: FullCalendarOptions | undefined;
  events: EventObject[] | undefined;
  roleid: any;
  public selectedlanguage: any;
  public selectedlanguage1: any;
  public callenderyear: any;
  public callenderdaysdount: any = [];
  public callenderMonth: any;
  public callenderBindData = new Date();
  public todaydate = new Date().getDate();
  public options1: any;
  public todayDay = this.datePipe.transform(new Date().getDay(), 'EEEE');
  joblist: any;
  search: any;
  count: any;
  staffid: any;
  Username: any;
  id: any;
  jobListCopy: any;
  p: any = 1;
  count1: any = 5;
  ngOnInit(): void {
    this.staffid = localStorage.getItem('userid');
    this.Username = localStorage.getItem('UserName');
    this.GetCandidateReg();
   
    // this.insertdetails()


    this.showorhidecontent = false;
    const format = 'yyyy-MM-dd';
    const myDate = new Date();
    const locale = 'en-US';
    var curr = new Date;
    //  this.todaydate1 = formatDate(myDate, format, locale);
    this.options1 = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'dd/MM/yyyy',
      outputFormat: 'YYYY/MM/DD',
      startOfWeek: 1
    };

    this.roleid = localStorage.getItem('roledid');

    if (this.selectedlanguage == '1') {
      this.selectedlanguage1 = 'en';
    }
    else if (this.selectedlanguage == '2') {
      this.selectedlanguage1 = 'ar';
    }
    else if (this.selectedlanguage == '3') {
      this.selectedlanguage1 = 'id';
    }
    else if (this.selectedlanguage == '4') {
      this.selectedlanguage1 = 'zh';
    }
    else if (this.selectedlanguage == '5') {
      this.selectedlanguage1 = 'th';
    }
    else if (this.selectedlanguage == '6') {
      this.selectedlanguage1 = 'es';
    }
    this.options = {

      editable: true,
      locale: this.selectedlanguage1,
      header: {
        right: 'prev,next ',
        center: 'title',
        left: 'month listMonth'
      },

      // contentHeight: 300,
      height: 500,
    }
  }



  showorhidecontent: any;

  changeStatus(evn: any) {

    if (evn.currentTarget.checked) {
      this.showorhidecontent = false;
    }
    else {
      this.showorhidecontent = true;
    }

  }

  public GetCandidateReg() {
    debugger
    if (this.staffid == undefined) {
      this.RecriutmentServiceService.GetCandidateRegistration().subscribe(data => {
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0);
        this.jobListCopy = this.joblist
        this.count = this.joblist.length;
        this.buildcallender(this.joblist);
      })
    }
    else {
      this.RecriutmentServiceService.GetCandidateRegistration().subscribe(data => {
        debugger
        this.joblist = data.filter(x => x.scheduled == 1 && x.interviewRejected == 0 && x.interviewSelected == 0 && x.staffID == this.staffid);
        this.count = this.joblist.length;
        this.buildcallender(this.joblist);
      })

    }

  }

  public Filterjobs() {
    debugger
    let searchCopy = this.search.toLowerCase();
    this.joblist = this.jobListCopy.filter((x: { jobRefernceID: string, jobTitle: string; }) => x.jobRefernceID.toString().includes(searchCopy) || x.jobTitle.toLowerCase().includes(searchCopy));
  }


  public getid(id: any) {
    this.id = id
  }

  public GetOfferLetter1(offer: any) {
    window.open(offer, "_blank")
  }


  public Accept(id: any, rinterview: any) {
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
          this.GetCandidateReg();
          location.reload();
        })
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
        location.reload();
      }
    })
  }




  public Reject(id: any, interview: any) {
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
  rinterview: any;
  public Acceptcandidate() {


    this.RecriutmentServiceService.RejectInterview(this.id, 1, this.rinterview).subscribe(data => {
      Swal.fire(
        'Selected!!',
        'Candidate has been Accepted',
        'success'
      )
      this.GetCandidateReg()
    })
  }



  public Rejecttcandidate() {


    this.RecriutmentServiceService.RejectInterview(this.id, 2, this.rinterview).subscribe(data => {
      Swal.fire(
        'Rejected!',
        'Candidate has been Rejected',
        'success'
      )
      this.GetCandidateReg()
    })
  }

  public GetOfferLetter(offer: any) {
    window.open(offer, "_blank")
  }

  public callenderstartday: any;
  public callenderendday: any;




  public alldates: any = []
  public buildcallender(MaintainanceList: string | any[]) {
    debugger
    this.callenderdaysdount.length = 0;
    this.callenderyear = this.callenderBindData.getFullYear();
    this.callenderMonth = this.datePipe.transform(this.callenderBindData, 'MMMM');
    this.callenderstartday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth(), 1);
    this.callenderendday = new Date(this.callenderBindData.getFullYear(), this.callenderBindData.getMonth() + 1, 0);
    this.callenderdaysdount.length = this.callenderendday.getDate();
    let o = 0;
    for (let i = 0; i < this.callenderdaysdount.length; i++) {
      let sdate = this.callenderstartday;
      let _date;
      if (sdate.getDate() == 1 && o == 0) {
        _date = sdate.setDate(sdate.getDate() + 0);
        o++
      }
      else {
        _date = sdate.setDate(sdate.getDate() + 1);
      }
      _date = this.datePipe.transform(sdate, 'dd');
      let _day = this.datePipe.transform(sdate, 'EEE');
      let dateformat = this.datePipe.transform(sdate, 'yyyy-MM-ddTHH:mm:ss');

      this.callenderdaysdount[i] = { date: _date, day: _day, dateformat: dateformat };
    }

    //Events Binding

    for (let j = 0; j < MaintainanceList.length; j++) {
      debugger;
      let currenteventlist = this.callenderdaysdount.filter((x: { dateformat: any; }) => x.dateformat == MaintainanceList[j].cdate);
      if (currenteventlist.length > 0) {
        // this.callenderdaysdount[currenteventlist[0].date - 1]['RequestFor'] = MaintainanceList[j].requestFor;
        this.callenderdaysdount[currenteventlist[0].date - 1]['SlotTime'] = MaintainanceList[j].slotTime;
        this.callenderdaysdount[currenteventlist[0].date - 1]['Candidate Name'] = MaintainanceList[j].candidateName;
        this.callenderdaysdount[currenteventlist[0].date - 1]['mantainenceHtml'] =
          "<span class='event_PendingBookCommunity'> Candidate Name:" + MaintainanceList[j].candidateName +
          // "<br>  Room Name : " + MaintainanceList[j].workSpaceID +
          "<br>  Slot Time  : " + MaintainanceList[j].slotTime
        // "<br>  End Time : " + MaintainanceList[j].endTime +
        // // "<br>  Unit :" + MaintainanceList[j].unitID +
        "</span>";
      }

    }
  }

  public previousmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() - 1);
    this.buildcallender(this.joblist);
  }
  public nextmonth() {
    debugger;
    this.callenderBindData.setMonth(this.callenderBindData.getMonth() + 1);
    this.buildcallender(this.joblist);
  }




}
