import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';
import { JobRecruitementReportComponent } from './job-recruitement-report/job-recruitement-report.component';
import { JobRecruitementsComponent } from './job-recruitements/job-recruitements.component';
import{AppliedCandidatesComponent} from './applied-candidates/applied-candidates.component';
import{ShortListedCandidatesComponent} from './short-listed-candidates/short-listed-candidates.component';
import{ScheduledInterviewsComponent} from './scheduled-interviews/scheduled-interviews.component';
import{SelectedCandidatesComponent} from './selected-candidates/selected-candidates.component';
import{OfferedCandidatesComponent}from './offered-candidates/offered-candidates.component';
import{JoinedCandidatesComponent} from './joined-candidates/joined-candidates.component';
import{DroppedCandidatesComponent}from './dropped-candidates/dropped-candidates.component'
import { ShortlistedCandidatesReportsComponent } from './shortlisted-candidates-reports/shortlisted-candidates-reports.component';
import { ScheduledInterviewsReportsComponent } from './scheduled-interviews-reports/scheduled-interviews-reports.component';
import { SelectedCandidatesReportsComponent } from './selected-candidates-reports/selected-candidates-reports.component';
import { OfferedCandidatesReportsComponent } from './offered-candidates-reports/offered-candidates-reports.component';
import { DroppedCandiadtesReportsComponent } from './dropped-candiadtes-reports/dropped-candiadtes-reports.component';
import { AppliedCandidatesReportsComponent } from './applied-candidates-reports/applied-candidates-reports.component';
import { JoinedCandidatesReportComponent } from './joined-candidates-report/joined-candidates-report.component';
import { JobRequisitionFormComponent } from './job-requisition-form/job-requisition-form.component';
import { FooterComponent } from './footer/footer.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JobRequisitionComponent } from './job-requisition/job-requisition.component';
import { VendorJobOpeningsComponent } from './vendor-job-openings/vendor-job-openings.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ClientformComponent } from './clientform/clientform.component';
import { ClientStaffDashboardComponent } from './client-staff-dashboard/client-staff-dashboard.component';
import { ClientStaffFormComponent } from './client-staff-form/client-staff-form.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { RecruiterFormComponent } from './recruiter-form/recruiter-form.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RecruiterStaffComponent } from './recruiter-staff/recruiter-staff.component';
import { RecruiterStaffDashboardComponent } from './recruiter-staff-dashboard/recruiter-staff-dashboard.component';
import { VendorStaffDashboardComponent } from './vendor-staff-dashboard/vendor-staff-dashboard.component';
import { VendorStaffFormComponent } from './vendor-staff-form/vendor-staff-form.component';
import { SourcingDashboardComponent } from './sourcing-dashboard/sourcing-dashboard.component';
import { SourcingFormComponent } from './sourcing-form/sourcing-form.component';
import { SourcingStaffFormComponent } from './sourcing-staff-form/sourcing-staff-form.component';
import { SourcingStaffDashboardComponent } from './sourcing-staff-dashboard/sourcing-staff-dashboard.component';

const routes: Routes = [

  {path: '', redirectTo: 'Login', pathMatch: 'full' },
  {path: "Login", component: LoginPageComponent },
  {path: "Header", component: HeaderComponent },
  {path: "Sidebar", component: SidebarComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'JobRecruitementReport',component:JobRecruitementReportComponent},
  {path:'JobRecruitements',component:JobRecruitementsComponent},
 {path:'AppliedCandidates',component:AppliedCandidatesComponent},
 {path:'ShortListedCandidates',component:ShortListedCandidatesComponent},
 {path:'ScheduledInterviews',component:ScheduledInterviewsComponent},
 {path:'SelectedCandidates',component:SelectedCandidatesComponent},
 {path:'OfferedCandidates',component:OfferedCandidatesComponent},
 {path:'JoinedCandidates',component:JoinedCandidatesComponent},
 {path:'DroppedCandidates',component: DroppedCandidatesComponent},
  {path:'AppliedCandidatesReports',component:AppliedCandidatesReportsComponent},
  {path:'ShortlistedCandidatesReports',component:ShortlistedCandidatesReportsComponent},
  {path:'ScheduledInterviewsReports',component: ScheduledInterviewsReportsComponent},
  {path:'SelectedCandidatesReports',component: SelectedCandidatesReportsComponent},
  {path:'OfferedCandidatesReports',component: OfferedCandidatesReportsComponent},
  {path:'DroppedCandiadtesReports',component: DroppedCandiadtesReportsComponent},
  {path:'JoinedCandidatesReport',component: JoinedCandidatesReportComponent},
  {path:'JobRequisitionForm',component: JobRequisitionFormComponent},
  {path:'Footer',component:FooterComponent},
  {path:'JobVacancies',component:JobVacanciesComponent},
   {path:'JobVacancies/:id',component:JobVacanciesComponent},
  {path:'Registration',component:RegistrationComponent},
  {path:'JobRequisition',component:JobRequisitionComponent},
  {path:'VendorJobOpenings',component:VendorJobOpeningsComponent},
  { path: 'ClientDashBoard', component: ClientdashboardComponent },
  { path: 'ClientForm', component: ClientformComponent },
  { path: 'ClientForm/:id', component: ClientformComponent },
  { path: 'ClientStaffDashBoard', component: ClientStaffDashboardComponent },
  { path: 'ClientStaffForm', component: ClientStaffFormComponent },

  {path:'VendorDashboard',component:VendorDashboardComponent},
  {path:'VendorForm',component: VendorFormComponent},
  { path: 'RecruiterForm', component: RecruiterFormComponent },
  { path: 'RecruiterDashboard', component: RecruiterDashboardComponent },
  { path: 'RecruiterStaff', component: RecruiterStaffComponent },
  { path: 'RecruiterStaffDashboard', component: RecruiterStaffDashboardComponent },
  {path:'VendorStaffDashboard',component:VendorStaffDashboardComponent},
  {path:'VendorStaffForm',component:VendorStaffFormComponent},
  {path:'VendorStaffForm/:id',component:VendorStaffFormComponent},  
  { path: 'SourcingDashboard', component: SourcingDashboardComponent },
  { path: 'SourcingForm', component: SourcingFormComponent },
  { path: 'SourcingStaffForm', component: SourcingStaffFormComponent },
  { path: 'SourcingStaffDashboard', component: SourcingStaffDashboardComponent },
  { path: 'ClientStaffForm/:id', component: ClientStaffFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
