import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { PaheService } from '../pahe.service';

@Component({
  selector: 'app-pa',
  templateUrl: './pa.component.html',
  styleUrls: ['./pa.component.css']
})
export class PaComponent implements OnInit {

 tempoh: any;
 tempod: any;
  x: any;
  car = [];
  types: SelectItem[];
  show = true;
  constructor(private paheService: PaheService, private router: Router) {
    
    this.types = [];
    this.types.push({title: 'lista', value: 'list', icon: 'fa fa-list'});
    this.types.push({title: 'Grid', value: 'grid', icon: 'fa fa-th'});
    
   }

  ngOnInit() {
    this.lista();
  }




  lista(){
    this.paheService.consultarPa()
    .then(dados =>{
      this.car= dados;
      this.show =false;
     console.log(dados);
     this.tempod = this.car[0].tempod;
     this.tempoh = this.car[0].tempoh;
   
     this.x ='Nenhum paciente com exame encontrado!'
    }).catch(erro =>{
      this.show =false;
      this.x ='Ocorreu algum erro inesperado, pacientes não encontrados'
    })
  }

}
