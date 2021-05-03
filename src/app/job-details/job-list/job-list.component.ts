import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { JobDetail } from 'src/app/shared/job-detail.model';
import { JobDetailService } from 'src/app/shared/job-detail.service';
import { JobDetailsComponent } from '../job-details.component';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
    styles: [
  ]
})
export class JobListComponent implements OnInit {
  public total_job: number | undefined;
  public total_tipo1!: number;
  public total_tipo2!: number;  
  public tipo_int!:number;
  
  
  constructor(public service: JobDetailService) {   
    
  }

  ngOnInit(): void {
    this.service.refreshList();  
    this.service.resetLists();  
    this.total_tipo1=0;
    this.total_tipo2=0;
  }
  

  populateForm(selectedRecord:JobDetail){
    this.service.formData = Object.assign({}, selectedRecord);    
  }

  calcularTotal(i: any){
    this.total_job = i + 1;       
   }
  
   calcularTotal2(){
    this.total_job = this.total_job;
    return this.total_job;
  }
  
  returnTipoVaga(tipo:string){
    this.tipo_int = Number(tipo);    
    if(this.tipo_int==1){   
     this.total_tipo1 = this.total_tipo1 + 1;
      return 'Presencial';        
    }
    else{
     this.total_tipo2= this.total_tipo2 + 1;
      return 'Remoto';         
    }           

  }
   
}

  

