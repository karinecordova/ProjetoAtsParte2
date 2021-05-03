import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import { ToastrService } from 'ngx-toastr';
import { JobDetailService } from 'src/app/shared/job-detail.service';
import { JobDetail } from 'src/app/shared/job-detail.model';
@Component({
  selector: 'app-job-detail-form',
  templateUrl: './job-detail-form.component.html',
  styles: [
  ]
})
export class JobDetailFormComponent implements OnInit {

  constructor(public service: JobDetailService,
    private toastr: ToastrService, 
    public poNotification: PoNotificationService) {}

  ngOnInit(): void {   
  }

  onSubmit(form: NgForm){
   if(this.service.formData.jobDetailId == 0)
      this.insertRecord(form);
      else
      this.updateRecord(form);

  }

  insertRecord(form:NgForm){
    this.service.postJobDetail().subscribe(
      res => {
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.success('Vaga Cadastrada com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form:NgForm){
    this.service.putJobDetail().subscribe(
      res => {
       this.resetForm(form);
       this.service.refreshList();
       this.toastr.info('Vaga Alterada com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new JobDetail();
  }

}
