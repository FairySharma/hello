import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CRMOverviewComponent } from './crm-overview/crm-overview.component';
import { CRMCallMonitoringComponent } from './crm-call-monitoring/crm-call-monitoring.component';
import { CIOverviewComponent } from './ci-overview/ci-overview.component';
import { CIAgentComplianceMonitoringComponent } from './ci-agent-compliance-monitoring/ci-agent-compliance-monitoring.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home' , component: HomeComponent , canActivate:[AuthGuard] },
  { path: 'crmoverview' , component: CRMOverviewComponent , canActivate:[AuthGuard] }, 
  { path: 'crmcall' , component: CRMCallMonitoringComponent , canActivate:[AuthGuard] },
  { path: 'cioverview' , component: CIOverviewComponent , canActivate:[AuthGuard] },
  { path: 'ciagent' , component: CIAgentComplianceMonitoringComponent , canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
