import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ManagerLoginFormComponent } from './manager-login-form/manager-login-form.component';
import { AgentLoginFormComponent } from './agent-login-form/agent-login-form.component';
import { HttpClientModule } from '@angular/common/http';
import { CRMOverviewComponent } from './crm-overview/crm-overview.component';
import { CRMCallMonitoringComponent } from './crm-call-monitoring/crm-call-monitoring.component';
import { CRMNavBarComponent } from './crm-nav-bar/crm-nav-bar.component';
import { CIOverviewComponent } from './ci-overview/ci-overview.component';
import { CIAgentComplianceMonitoringComponent } from './ci-agent-compliance-monitoring/ci-agent-compliance-monitoring.component';
import { CINavBarComponent } from './ci-nav-bar/ci-nav-bar.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManagerLoginFormComponent,
    AgentLoginFormComponent,
    CRMOverviewComponent,
    CRMCallMonitoringComponent,
    CRMNavBarComponent,
    CIOverviewComponent,
    CIAgentComplianceMonitoringComponent,
    CINavBarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
