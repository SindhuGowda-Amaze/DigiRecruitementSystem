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
  localStorage.setItem('Pagename', 'Client')
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
  localStorage.setItem('Pagename', 'Client Staff')
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
  localStorage.setItem('Pagename', 'Client Staff')
  this.router.navigate(['/ClientStaffDashBoard']);
  this.client=false
  this.clientstaff=false
  this.home=false
  this.recruitstaff = true
  this.vendorstaf=false
  this.vendo=false
}
vendo:any
public vendor(){
  localStorage.setItem('Pagename', 'Client Staff')
  this.router.navigate(['/ClientStaffDashBoard']);
  this.vendo=true
  this.client=false
  this.clientstaff=false
  this.home=false
  this.recruitstaff = false
  this.vendorstaf=false
}

vendorstaf:any
public vendorstaff(){
  localStorage.setItem('Pagename', 'Client Staff')
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
    localStorage.setItem('Pagename', 'Dashboard')
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
      localStorage.setItem('Pagename', 'Dashboard')
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
    else if(this.roleid=='6'){
      localStorage.setItem('Pagename', 'Dashboard')
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
      localStorage.setItem('Pagename', 'Dashboard')
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
    else if(this.roleid=='1'){
      localStorage.setItem('Pagename', 'Dashboard')
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
    localStorage.setItem('Pagename', 'Job Recruitment')
    this.router.navigate(['/JobRecruitements']);
   


  }

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
    localStorage.setItem('Pagename', 'Job Recruitment')
    this.router.navigate(['/VendorJobOpenings']);
  
  }

  public Appliedcandidates(){
    localStorage.setItem('Pagename', 'Applied Candidates')
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
    localStorage.setItem('Pagename', 'Shortlisted Candidates')
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
    localStorage.setItem('Pagename', 'Scheduled Candidates')
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
    localStorage.setItem('Pagename', 'Selected Candidates')
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
    localStorage.setItem('Pagename', 'Offered Candidates')
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
    localStorage.setItem('Pagename', 'Joined Candidates')
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
    localStorage.setItem('Pagename', 'Dropped Candidates')
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
    localStorage.setItem('Pagename', 'Vendor')
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
    localStorage.setItem('Pagename', 'Applied')
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
    localStorage.setItem('Pagename', 'Shortlisted')
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
    localStorage.setItem('Pagename', 'Scheduled')
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
    localStorage.setItem('Pagename', 'Selected')
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
    localStorage.setItem('Pagename', 'Job Recruitment')
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
    localStorage.setItem('Pagename', 'Job Recruitment')
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
    localStorage.setItem('Pagename', 'Joined')
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
    localStorage.setItem('Pagename', 'Dropped')
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
