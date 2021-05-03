import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { JobDetailService } from '../shared/job-detail.service';
import { JobDetail } from '../shared/job-detail.model';
@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styles: [
  ]
})
export class JobDetailsComponent implements OnInit { 
  public tipo_int!:number;
  constructor(public service: JobDetailService, 
    private toastr: ToastrService) {      
    } 

  ngOnInit(): void {
    this.service.refreshList();
   
  }
    
  populateForm(selectedRecord:JobDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Deseja realmente excluir?')){
      this.service.deleteJobDetail(id)
    .subscribe(
      res=> {
        this.service.refreshList();
        this.toastr.error('Vaga Excluída com Sucesso!');
        
      },
      err =>{console.log(err)}
    )

    }   
    
  }
  returnTipoVaga(tipo:string){
    this.tipo_int = Number(tipo);    
    if(this.tipo_int==1){   
       return 'Presencial';        
    }
    else{
     return 'Remoto';         
    }           

  }

}
