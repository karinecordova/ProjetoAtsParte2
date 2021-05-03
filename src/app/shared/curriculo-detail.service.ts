import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CurriculoDetail } from './curriculo-detail.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoDetailService {

  formData: CurriculoDetail= new CurriculoDetail();
  readonly baseURL = 'http://localhost:32404/api/CurriculoDetail';
  list : CurriculoDetail[] | undefined;

  constructor(private http: HttpClient) { }

  postCurriculoDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCurriculoDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.curriculoDetailId}`, this.formData);
  }
  deleteCurriculoDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as CurriculoDetail[]);
  }

  resetLists(){
    this.list = [];
  }
}
