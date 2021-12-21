import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { AppRoutingModule } from './app-routing.module';
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
    DroppedCandidatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
