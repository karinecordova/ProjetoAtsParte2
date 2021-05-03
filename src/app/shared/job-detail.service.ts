import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobDetail } from './job-detail.model';

@Injectable({
  providedIn: 'root'
})
export class JobDetailService {

  formData:JobDetail= new JobDetail();
  readonly baseURL = 'http://localhost:32404/api/JobDetails';
  list : JobDetail[] | undefined;
   
  
  constructor(private http: HttpClient) { }

  postJobDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putJobDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.jobDetailId}`, this.formData);
  }
  deleteJobDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as JobDetail[]);
  }
  resetLists(){
    this.list = [];
  }
}
