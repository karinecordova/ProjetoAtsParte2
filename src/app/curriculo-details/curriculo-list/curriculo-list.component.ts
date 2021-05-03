import { Component, OnInit } from '@angular/core';
import { CurriculoDetail } from 'src/app/shared/curriculo-detail.model';
import { CurriculoDetailService } from 'src/app/shared/curriculo-detail.service';

@Component({
  selector: 'app-curriculo-list',
  templateUrl: './curriculo-list.component.html',
  styles: [
  ]
})
export class CurriculoListComponent implements OnInit {
  public tipo_int!:number;
  public total_curriculo: number | undefined;
  public total_sexo1!: number;
  public total_sexo2!: number;  
  public total_tipo1!: number;
  public total_tipo2!: number; 
  public tipo_int_sexo!:number;
  constructor(public service: CurriculoDetailService) { }

  ngOnInit(): void {
    this.service.refreshList();  
    this.service.resetLists(); 
    this.total_sexo1=0;
    this.total_sexo2=0; 
    this.total_tipo1=0;
    this.total_tipo2=0; 
  }

  populateForm(selectedRecord:CurriculoDetail){
    this.service.formData = Object.assign({}, selectedRecord);    
  }

  calcularTotal(i: any){
    this.total_curriculo = i + 1;       
   }
  
   calcularTotal2(){
    this.total_curriculo = this.total_curriculo;
    return this.total_curriculo;
  }

  returnWorking(tipo:string){
    this.tipo_int = Number(tipo);    
    if(this.tipo_int==1){ 
      this.total_tipo1 = this.total_tipo1 + 1;  
       return 'Sim';        
    }
    else{
    this.total_tipo2 = this.total_tipo2 + 1; 
     return 'Não';         
    }           

  }

  returnSexo(tipo:string){
    this.tipo_int_sexo = Number(tipo);    
    if(this.tipo_int_sexo==1){   
      this.total_sexo1= this.total_sexo1 + 1;
       return 'Feminino';        
    }
    else{
      this.total_sexo2= this.total_sexo2 + 1;
     return 'Masculino';         
    }           

  }

}
