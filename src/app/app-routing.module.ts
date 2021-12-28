import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';
import { JobRecruitementReportComponent } from './job-recruitement-report/job-recruitement-report.component';
import { JobRecruitementsComponent } from './job-recruitements/job-recruitements.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { ShortListedCandidatesComponent } from './short-listed-candidates/short-listed-candidates.component';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { OfferedCandidatesComponent } from './offered-candidates/offered-candidates.component';
import { JoinedCandidatesComponent } from './joined-candidates/joined-candidates.component';
import { DroppedCandidatesComponent } from './dropped-candidates/dropped-candidates.component'
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
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [

  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: "Login", component: LoginPageComponent },
  { path: "Header", component: HeaderComponent, canActivate: [AuthGuard] },
  { path: "Sidebar", component: SidebarComponent, canActivate: [AuthGuard] },
  { path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'JobRecruitementReport', component: JobRecruitementReportComponent, canActivate: [AuthGuard] },
  { path: 'JobRecruitements', component: JobRecruitementsComponent, canActivate: [AuthGuard] },
  { path: 'AppliedCandidates', component: AppliedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'ShortListedCandidates', component: ShortListedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'ScheduledInterviews', component: ScheduledInterviewsComponent, canActivate: [AuthGuard] },
  { path: 'SelectedCandidates', component: SelectedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'OfferedCandidates', component: OfferedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'JoinedCandidates', component: JoinedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'DroppedCandidates', component: DroppedCandidatesComponent, canActivate: [AuthGuard] },
  { path: 'AppliedCandidatesReports', component: AppliedCandidatesReportsComponent, canActivate: [AuthGuard] },
  { path: 'ShortlistedCandidatesReports', component: ShortlistedCandidatesReportsComponent, canActivate: [AuthGuard] },
  { path: 'ScheduledInterviewsReports', component: ScheduledInterviewsReportsComponent, canActivate: [AuthGuard] },
  { path: 'SelectedCandidatesReports', component: SelectedCandidatesReportsComponent, canActivate: [AuthGuard] },
  { path: 'OfferedCandidatesReports', component: OfferedCandidatesReportsComponent, canActivate: [AuthGuard] },
  { path: 'DroppedCandiadtesReports', component: DroppedCandiadtesReportsComponent, canActivate: [AuthGuard] },
  { path: 'JoinedCandidatesReport', component: JoinedCandidatesReportComponent, canActivate: [AuthGuard] },
  { path: 'JobRequisitionForm', component: JobRequisitionFormComponent, canActivate: [AuthGuard] },
  { path: 'Footer', component: FooterComponent, canActivate: [AuthGuard] },
  { path: 'JobVacancies', component: JobVacanciesComponent, canActivate: [AuthGuard] },
  { path: 'JobVacancies/:id', component: JobVacanciesComponent, canActivate: [AuthGuard] },
  { path: 'Registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'JobRequisition', component: JobRequisitionComponent, canActivate: [AuthGuard] },
  { path: 'VendorJobOpenings', component: VendorJobOpeningsComponent, canActivate: [AuthGuard] },
  { path: 'ClientDashBoard', component: ClientdashboardComponent, canActivate: [AuthGuard] },
  { path: 'ClientForm', component: ClientformComponent, canActivate: [AuthGuard] },
  { path: 'ClientForm/:id', component: ClientformComponent, canActivate: [AuthGuard] },
  { path: 'ClientStaffDashBoard', component: ClientStaffDashboardComponent, canActivate: [AuthGuard] },
  { path: 'ClientStaffForm', component: ClientStaffFormComponent, canActivate: [AuthGuard] },

  { path: 'VendorDashboard', component: VendorDashboardComponent, canActivate: [AuthGuard] },
  { path: 'VendorForm', component: VendorFormComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterForm', component: RecruiterFormComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterForm/:id', component: RecruiterFormComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterDashboard', component: RecruiterDashboardComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterStaff', component: RecruiterStaffComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterStaff/:id', component: RecruiterStaffComponent, canActivate: [AuthGuard] },
  { path: 'RecruiterStaffDashboard', component: RecruiterStaffDashboardComponent, canActivate: [AuthGuard] },

  { path: 'VendorStaffDashboard', component: VendorStaffDashboardComponent, canActivate: [AuthGuard] },
  { path: 'VendorStaffForm', component: VendorStaffFormComponent, canActivate: [AuthGuard] },
  { path: 'VendorStaffForm/:id', component: VendorStaffFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingDashboard', component: SourcingDashboardComponent, canActivate: [AuthGuard] },
  { path: 'SourcingForm', component: SourcingFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingForm/:id', component: SourcingFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingStaffForm', component: SourcingStaffFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingStaffDashboard', component: SourcingStaffDashboardComponent, canActivate: [AuthGuard] },
  { path: 'VendorForm/:id', component: VendorFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingStaffForm/:id', component: SourcingStaffFormComponent, canActivate: [AuthGuard] },
  { path: 'SourcingStaffDashboard', component: SourcingStaffDashboardComponent, canActivate: [AuthGuard] },

  { path: 'SourcingStaffDashboard', component: SourcingStaffDashboardComponent, canActivate: [AuthGuard] },
  { path: 'ClientStaffForm/:id', component: ClientStaffFormComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
