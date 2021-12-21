import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';
import { JobRecruitementReportComponent } from './job-recruitement-report/job-recruitement-report.component';
import { ShortlistedCandidatesReportsComponent } from './shortlisted-candidates-reports/shortlisted-candidates-reports.component';
import { ScheduledInterviewsReportsComponent } from './scheduled-interviews-reports/scheduled-interviews-reports.component';
import { SelectedCandidatesReportsComponent } from './selected-candidates-reports/selected-candidates-reports.component';
import { OfferedCandidatesReportsComponent } from './offered-candidates-reports/offered-candidates-reports.component';
import { DroppedCandiadtesReportsComponent } from './dropped-candiadtes-reports/dropped-candiadtes-reports.component';
import { AppliedCandidatesReportsComponent } from './applied-candidates-reports/applied-candidates-reports.component';
import { JoinedCandidatesReportComponent } from './joined-candidates-report/joined-candidates-report.component';
import { JobRequisitionFormComponent } from './job-requisition-form/job-requisition-form.component';

const routes: Routes = [

  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },
  {path: "Header", component: HeaderComponent },
  {path: "Sidebar", component: SidebarComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'JobRecruitementReport',component:JobRecruitementReportComponent},
  {path:'AppliedCandidatesReports',component:AppliedCandidatesReportsComponent},
  {path:'ShortlistedCandidatesReports',component:ShortlistedCandidatesReportsComponent},
  {path:'ScheduledInterviewsReports',component: ScheduledInterviewsReportsComponent},
  {path:'SelectedCandidatesReports',component: SelectedCandidatesReportsComponent},
  {path:'OfferedCandidatesReports',component: OfferedCandidatesReportsComponent},
  {path:'DroppedCandiadtesReports',component: DroppedCandiadtesReportsComponent},
  {path:'JoinedCandidatesReport',component: JoinedCandidatesReportComponent},
  {path:'JobRequisitionForm',component: JobRequisitionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
