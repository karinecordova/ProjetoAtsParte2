import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobDetailFormComponent } from './job-details/job-detail-form/job-detail-form.component';
import { CurriculoDetailsComponent } from './curriculo-details/curriculo-details.component';
import { CurriculoDetailFormComponent } from './curriculo-details/curriculo-detail-form/curriculo-detail-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { PoMenuModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { JobListComponent } from './job-details/job-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { CurriculoListComponent } from './curriculo-details/curriculo-list/curriculo-list.component';
import { PoSlideModule } from '@po-ui/ng-components';
@NgModule({
  declarations: [
    AppComponent,
    JobDetailsComponent,
    JobDetailFormComponent,
    CurriculoDetailsComponent,
    CurriculoDetailFormComponent,
    JobListComponent,
    HomeComponent,
    CurriculoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    PoMenuModule, 
    PoButtonModule, 
    PoSlideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
