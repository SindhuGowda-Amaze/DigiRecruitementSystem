import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';
import { JobRecruitementReportComponent } from './job-recruitement-report/job-recruitement-report.component';

const routes: Routes = [

  { path: '', redirectTo: 'Dashboard', pathMatch: 'full' },

  {
    path: "Header", component: HeaderComponent 
  },
  {
    path: "Sidebar", component: SidebarComponent
  },
  
  {path:'Dashboard',component:DashboardComponent},
  {path:'JobRecruitementReport',component:JobRecruitementReportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
