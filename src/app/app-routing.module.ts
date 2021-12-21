import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  { path: '', redirectTo: '', pathMatch: 'full' },
  {path:'Dashboard',component:DashboardComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
