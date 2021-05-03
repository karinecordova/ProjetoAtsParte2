import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurriculoDetailFormComponent } from './curriculo-details/curriculo-detail-form/curriculo-detail-form.component';
import { CurriculoDetailsComponent } from './curriculo-details/curriculo-details.component';
import { JobDetailFormComponent } from './job-details/job-detail-form/job-detail-form.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-details/job-list/job-list.component';
import { HomeComponent } from './home/home.component';
import { CurriculoListComponent } from './curriculo-details/curriculo-list/curriculo-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'home', component: HomeComponent }, 
    { path: 'curriculoform', component: CurriculoDetailsComponent },
    { path: 'curriculolist', component: CurriculoListComponent},
    { path: 'jobform', component: JobDetailsComponent },
    { path: 'joblist', component: JobListComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
