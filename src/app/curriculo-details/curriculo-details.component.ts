import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CurriculoDetail } from '../shared/curriculo-detail.model';
import { CurriculoDetailService } from '../shared/curriculo-detail.service';

@Component({
  selector: 'app-curriculo-details',
  templateUrl: './curriculo-details.component.html',
  styles: [
  ]
})
export class CurriculoDetailsComponent implements OnInit {
  public tipo_int!:number;
  constructor(public service: CurriculoDetailService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(selectedRecord:CurriculoDetail){
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id:number){
    if(confirm('Deseja realmente excluir?')){
      this.service.deleteCurriculoDetail(id)
    .subscribe(
      res=> {
        this.service.refreshList();
        this.toastr.error('Currículo Excluído com Sucesso!');
        
      },
      err =>{console.log(err)}
    )

    }   
    
  }
  returnWorking(tipo:string){
    this.tipo_int = Number(tipo);    
    if(this.tipo_int==1){   
       return 'Sim';        
    }
    else{
     return 'Não';         
    }           

  }

}
