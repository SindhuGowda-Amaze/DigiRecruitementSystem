import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/Pages/header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';




import { SidebarComponent } from 'src/Pages/sidebar/sidebar.component';

const routes: Routes = [

  // { path: '', redirectTo: '#', pathMatch: 'full' },

  {
    path: "Header", component: HeaderComponent 
  },
  {
    path: "Sidebar", component: SidebarComponent
  },
  {path:'Dashboard',component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
