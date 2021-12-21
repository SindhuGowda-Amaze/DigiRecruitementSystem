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


const routes: Routes = [

  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },

  {
    path: "Header", component: HeaderComponent 
  },
  {
    path: "Sidebar", component: SidebarComponent
  },
  
  {path:'Dashboard',component:DashboardComponent},
  {path:'JobRecruitementReport',component:JobRecruitementReportComponent},
  {path:'JobRecruitements',component:JobRecruitementsComponent},
 {path:'AppliedCandidates',component:AppliedCandidatesComponent},
 {path:'ShortListedCandidates',component:ShortListedCandidatesComponent},
 {path:'ScheduledInterviews',component:ScheduledInterviewsComponent},
 {path:'SelectedCandidates',component:SelectedCandidatesComponent},
 {path:'OfferedCandidates',component:OfferedCandidatesComponent},
 {path:'JoinedCandidates',component:JoinedCandidatesComponent},
 {path:'DroppedCandidates',component: DroppedCandidatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
