import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppComponent } from './app.component';
import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JobRecruitementReportComponent } from './job-recruitement-report/job-recruitement-report.component';
import { JobRecruitementsComponent } from './job-recruitements/job-recruitements.component';
import { AppliedCandidatesComponent } from './applied-candidates/applied-candidates.component';
import { ShortListedCandidatesComponent } from './short-listed-candidates/short-listed-candidates.component';
import { ScheduledInterviewsComponent } from './scheduled-interviews/scheduled-interviews.component';
import { SelectedCandidatesComponent } from './selected-candidates/selected-candidates.component';
import { OfferedCandidatesComponent } from './offered-candidates/offered-candidates.component';
import { JoinedCandidatesComponent } from './joined-candidates/joined-candidates.component';
import { DroppedCandidatesComponent } from './dropped-candidates/dropped-candidates.component';
import { AppliedCandidatesReportsComponent } from './applied-candidates-reports/applied-candidates-reports.component';
import { ShortlistedCandidatesReportsComponent } from './shortlisted-candidates-reports/shortlisted-candidates-reports.component';
import { ScheduledInterviewsReportsComponent } from './scheduled-interviews-reports/scheduled-interviews-reports.component';
import { SelectedCandidatesReportsComponent } from './selected-candidates-reports/selected-candidates-reports.component';
import { OfferedCandidatesReportsComponent } from './offered-candidates-reports/offered-candidates-reports.component';
import { DroppedCandiadtesReportsComponent } from './dropped-candiadtes-reports/dropped-candiadtes-reports.component';
import { JoinedCandidatesReportComponent } from './joined-candidates-report/joined-candidates-report.component';
import { JobRequisitionFormComponent } from './job-requisition-form/job-requisition-form.component';
import { FooterComponent } from './footer/footer.component';
import { JobVacanciesComponent } from './job-vacancies/job-vacancies.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JobRequisitionComponent } from './job-requisition/job-requisition.component';
import { PipesModule } from 'pipes-module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { VendorJobOpeningsComponent } from './vendor-job-openings/vendor-job-openings.component';
import { ClientformComponent } from './clientform/clientform.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ClientStaffDashboardComponent } from './client-staff-dashboard/client-staff-dashboard.component';
import { ClientStaffFormComponent } from './client-staff-form/client-staff-form.component';
import { VendorDashboardComponent } from './vendor-dashboard/vendor-dashboard.component';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { RecruiterFormComponent } from './recruiter-form/recruiter-form.component';
import { RecruiterStaffComponent } from './recruiter-staff/recruiter-staff.component';
import { RecruiterStaffDashboardComponent } from './recruiter-staff-dashboard/recruiter-staff-dashboard.component';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { SourcingDashboardComponent } from './sourcing-dashboard/sourcing-dashboard.component';
import { SourcingFormComponent } from './sourcing-form/sourcing-form.component';
import { SourcingStaffDashboardComponent } from './sourcing-staff-dashboard/sourcing-staff-dashboard.component';
import { SourcingStaffFormComponent } from './sourcing-staff-form/sourcing-staff-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    JobRecruitementReportComponent,
    JobRecruitementsComponent,
    AppliedCandidatesComponent,
    ShortListedCandidatesComponent,
    ScheduledInterviewsComponent,
    SelectedCandidatesComponent,
    OfferedCandidatesComponent,
    JoinedCandidatesComponent,
    DroppedCandidatesComponent,
    AppliedCandidatesReportsComponent,
    ShortlistedCandidatesReportsComponent,
    ScheduledInterviewsReportsComponent,
    SelectedCandidatesReportsComponent,
    OfferedCandidatesReportsComponent,
    DroppedCandiadtesReportsComponent,
    JoinedCandidatesReportComponent,
    JobRequisitionFormComponent,
    FooterComponent,
    JobVacanciesComponent,
    RegistrationComponent,
    LoginPageComponent,
    JobRequisitionComponent,
    VendorJobOpeningsComponent,
    ClientformComponent,
    ClientdashboardComponent,
    ClientStaffDashboardComponent,
    ClientStaffFormComponent,
    VendorDashboardComponent,
    VendorFormComponent,
    RecruiterFormComponent,
    RecruiterStaffComponent,
    RecruiterStaffDashboardComponent,
    RecruiterDashboardComponent,
    SourcingDashboardComponent,
    SourcingFormComponent,
    SourcingStaffDashboardComponent,
    SourcingStaffFormComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxDropzoneModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    Ng2SearchPipeModule
    

    
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
