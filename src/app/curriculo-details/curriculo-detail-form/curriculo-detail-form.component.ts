import { Component, OnInit } from '@angular/core';
import { CurriculoDetailService } from './../../shared/curriculo-detail.service';
import { CurriculoDetail } from 'src/app/shared/curriculo-detail.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PoNotificationService } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';


@Component({
  selector: 'app-curriculo-detail-form',
  templateUrl: './curriculo-detail-form.component.html',
  styles: [
  ]
})
export class CurriculoDetailFormComponent implements OnInit {

  constructor(public service: CurriculoDetailService,
    private toastr: ToastrService, 
    public poNotification: PoNotificationService) {}

  ngOnInit(): void {
   
  }
  onSubmit(form: NgForm){
   if(this.service.formData.curriculoDetailId == 0)
      this.insertRecord(form);
      else
      this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.service.postCurriculoDetail().subscribe(
      res => {
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.success('Currículo Cadastrado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putCurriculoDetail().subscribe(
      res => {
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.info('Currículo Alterado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new CurriculoDetail();
  }

  

}
