import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  company_name: any;
  temp:any
  roleid:any;
  role:any;
  UserName:any;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.temp=sessionStorage.getItem('temp')
    this.roleid = sessionStorage.getItem('roleid');
    this.company_name = sessionStorage.getItem("company_name");
    this.UserName = sessionStorage.getItem('UserName');
    this.role = sessionStorage.getItem('role')
  }
  logout() {
    sessionStorage.clear();
    location.href = "#/Login";

    // localStorage.clear();
    location.reload();
  }


  public openCity(evt: any) {
    var i, tablinks;

    tablinks = document.getElementsByClassName("nonactive");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
  }
  client:any
public Client(){
  localStorage.setItem('Pagename', 'CLIENT')
    this.router.navigate(['/ClientDashBoard']);
    this.client=true
    this.home=false
    this.clientstaff=false
    this.recruitstaff = false
    this.vendorstaf=false
    this.vendo=false

    
}
clientstaff:any
public Clientstaff(){
  localStorage.setItem('Pagename', 'CLIENT STAFF')
    this.router.navigate(['/ClientStaffDashBoard']);
    this.client=false
    this.clientstaff=true
    this.home=false
    this.recruitstaff = false
    this.vendorstaf=false
    this.vendo=false
}
recruitstaff:any
public Recruitstaff(){
  localStorage.setItem('Pagename', 'RECRUITER')
  this.router.navigate(['/RecruiterStaffDashboard']);
  this.client=false
  this.clientstaff=false
  this.home=false
  this.recruitstaff = true
  this.vendorstaf=false
  this.vendo=false
}
vendo:any
public vendor(){
  localStorage.setItem('Pagename', 'VENDOR')
  this.router.navigate(['/VendorDashboard']);
  this.vendo=true
  this.client=false
  this.clientstaff=false
  this.home=false
  this.recruitstaff = false
  this.vendorstaf=false
}

vendorstaf:any
public vendorstaff(){
  localStorage.setItem('Pagename', 'VENDOR STAFF')
  this.router.navigate(['/VendorStaffDashboard']);
  this.vendorstaf=true
  this.vendo=false
  this.client=false
  this.clientstaff=false
  this.home=false
  this.recruitstaff = false
}

home:any
Vendorrecruit:any
  public admin() {
    debugger
    if (this.roleid=='1') {
    localStorage.setItem('Pagename', 'DASHBOARD')
    this.router.navigate(['/AdminDashboard']);
    this.home=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
   
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
    }
    else if( this.roleid!='5')
    {
      localStorage.setItem('Pagename', 'DASHBOARD')
      this.router.navigate(['/Dashboard']);
      this.home=true
      this.Jobrecruit=false
      this.Vendorrecruit=false
     
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.Vendorrecruit=false
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.selected=false
      this.offered=false
      this.joined=false
      this.dropped=false
      this.vendorreport=false
      this.appliedreport=false
      this.shortlistedreport=false
      this.selectedreport=false
      this.offeredreport=false
      this.Jobrecruitreport=false
      this.joinedreport=false
      this.droppedreport=false
    }
    else if(this.roleid=='6'){
      localStorage.setItem('Pagename', 'DASHBOARD')
      this.router.navigate(['/Dashboard']);
      this.home=true
      this.Jobrecruit=false
      this.Vendorrecruit=false
     
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.Vendorrecruit=false
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.selected=false
      this.offered=false
      this.joined=false
      this.dropped=false
      this.vendorreport=false
      this.appliedreport=false
      this.shortlistedreport=false
      this.selectedreport=false
      this.offeredreport=false
      this.Jobrecruitreport=false
      this.joinedreport=false
      this.droppedreport=false
    }
    else if(this.roleid=='3'){
      localStorage.setItem('Pagename', 'DASHBOARD')
      this.router.navigate(['/Dashboard']);
      this.home=true
      this.Jobrecruit=false
      this.Vendorrecruit=false
     
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.Vendorrecruit=false
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.selected=false
      this.offered=false
      this.joined=false
      this.dropped=false
      this.vendorreport=false
      this.appliedreport=false
      this.shortlistedreport=false
      this.selectedreport=false
      this.offeredreport=false
      this.Jobrecruitreport=false
      this.joinedreport=false
      this.droppedreport=false
    }
    else if(this.roleid=='4'){
      localStorage.setItem('Pagename', 'DASHBOARD')
      this.router.navigate(['/Dashboard']);
      this.Jobrecruit=false
      this.Vendorrecruit=false
      this.home=true
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.Vendorrecruit=false
      this.applied=false
      this.shortlist=false
      this.scheduled=false
      this.selected=false
      this.offered=false
      this.joined=false
      this.dropped=false
      this.vendorreport=false
      this.appliedreport=false
      this.shortlistedreport=false
      this.selectedreport=false
      this.offeredreport=false
      this.Jobrecruitreport=false
      this.joinedreport=false
      this.droppedreport=false
    }
  }

  Jobrecruit:any
  applied:any
  shortlist:any
  public JobRecruitment(){
    this.Jobrecruit=true
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
    localStorage.setItem('Pagename', 'OPEN POSITIONS')
    this.router.navigate(['/JobRecruitements']);
   


  }
active:any;
  public ScheduledInterviews(){
    if(this.roleid=='5'){
      this.active = 80;
      localStorage.setItem('Pagename', 'SCHEDULED INTERVIEWS')
      this.router.navigate(['/ScheduledInterviews']);
    }
    
  }

  
  public SelectedCandidates(){
    if(this.roleid=='5'){
      this.active = 81;
      localStorage.setItem('Pagename', 'SELECTED CANDIDATES')
      this.router.navigate(['/SelectedCandidates']);
    }
    
  }

  public RejectedCandidates(){
    if(this.roleid=='5'){
      this.active = 82;
      localStorage.setItem('Pagename', 'REJECTED CANDIDATES')
      this.router.navigate(['/RejectedCadidates']);
    }
    
  }

  // public ScheduledInterviewCalender(){
  //   if(this.roleid=='5'){
  //     this.active = 83;
  //     localStorage.setItem('Pagename', 'INTERVIEW CALENDER')
  //     this.router.navigate(['/ScheduledInterviewCalender']);
  //   }
    
  // }


  public Description(){
    localStorage.setItem('Pagename', 'Job Description')
    this.router.navigate(['/JobDescriptionDash']);
  }

  public VendorRecruitment(){
    this.Vendorrecruit=true
    this.Jobrecruit=false
   
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
  
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
    localStorage.setItem('Pagename', 'OPEN POSITIONS')
    this.router.navigate(['/VendorJobOpenings']);
  
  }

  public Appliedcandidates(){
    localStorage.setItem('Pagename', 'APPLIED CANDIDATES')
    this.router.navigate(['/AppliedCandidates']);
    this.applied=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
  
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
  
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }


  public Shortlisted(){
    localStorage.setItem('Pagename', 'SHORTLISTED CANDIDATES')
    this.router.navigate(['/ShortListedCandidates']);
    this.shortlist=true
    this.applied=false
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
  

    this.scheduled=false
    this.Vendorrecruit=false
  
 
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }

  scheduled:any
  selected:any
  offered:any
  joined:any
  dropped:any
  public Scheduled(){
    localStorage.setItem('Pagename', 'SCHEDULED INTERVIEWS')
    this.router.navigate(['/ScheduledInterviews']);
    this.scheduled=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
   
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
   
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }

  

  public Selected(){
    localStorage.setItem('Pagename', 'SELECTED CANDIDATES')
    this.router.navigate(['/SelectedCandidates']);
    this.selected=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
  
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }


  public Offered(){
    localStorage.setItem('Pagename', 'OFFERED CANDIDATES')
    this.router.navigate(['/OfferedCandidates']);
    this.offered=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
  
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }

  public Joined(){
    localStorage.setItem('Pagename', 'JOINED CANDIDATES')
    this.router.navigate(['/JoinedCandidates']);
    this.joined=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
  
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false
  }


  public Dropped(){
    localStorage.setItem('Pagename', 'DROPPED CANDIDATES')
    this.router.navigate(['/DroppedCandidates']);
    this.dropped=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
  
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }
  vendorreport:any
  appliedreport:any
  shortlistedreport:any
  scheduledreport:any
  selectedreport:any
  offeredreport:any
  Jobrecruitreport:any
  joinedreport:any
  droppedreport:any
  public VendorReport(){
    localStorage.setItem('Pagename', 'VENDOR REPORT')
    this.router.navigate(['/VendorJobOpenings']);
    this.vendorreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
  
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }
  public AppliedReport(){
    localStorage.setItem('Pagename', 'APPLIED CANDIDATES REPORT')
    this.router.navigate(['/AppliedCandidatesReports']);
    this.appliedreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
   
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }

  public Shortlistedreport(){
    localStorage.setItem('Pagename', 'SHORTLISTED CANDIDATES REPORT')
    this.router.navigate(['/ShortlistedCandidatesReports']);
    
    this.shortlistedreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
   
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }

  public ScheduledReport(){
    localStorage.setItem('Pagename', 'SCHEDULED INTERVIEWS REPORT')
    this.router.navigate(['/ScheduledInterviewsReports']);
    this.scheduledreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }

  public SelectedReport(){
    localStorage.setItem('Pagename', 'SELECTED CANDIDATES REPORT')
    this.router.navigate(['/SelectedCandidatesReports']);
    this.selectedreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
  
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }

  public OfferedReport(){
    localStorage.setItem('Pagename', 'OPEN POSITIONS')
    this.router.navigate(['/OfferedCandidatesReports']);
    this.offeredreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
 
    this.Jobrecruitreport=false
    this.joinedreport=false
    this.droppedreport=false

  }

  public JobRecruitReport(){
    localStorage.setItem('Pagename', 'OPEN POSITIONS')
    this.router.navigate(['/JobRecruitementReport']);
    this.Jobrecruitreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
  
    this.joinedreport=false
    this.droppedreport=false

  }

  public JoinedReport(){
    localStorage.setItem('Pagename', 'JOINED CANDIDATES REPORT')
    this.router.navigate(['/JoinedCandidatesReport']);
    this.joinedreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
   
    this.droppedreport=false

  }

  public DroppedReport(){
    localStorage.setItem('Pagename', 'DROPPED CANDIDATES REPORT')
    this.router.navigate(['/DroppedCandiadtesReports']);
    this.droppedreport=true
    this.Jobrecruit=false
    this.Vendorrecruit=false
    this.home=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.Vendorrecruit=false
    this.applied=false
    this.shortlist=false
    this.scheduled=false
    this.selected=false
    this.offered=false
    this.joined=false
    this.dropped=false
    this.vendorreport=false
    this.appliedreport=false
    this.shortlistedreport=false
    this.selectedreport=false
    this.offeredreport=false
    this.Jobrecruitreport=false
    this.joinedreport=false
   

  }

}
