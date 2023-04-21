import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SelectItem } from 'primeng/components/common/selectitem';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-pacprot',
  templateUrl: './pacprot.component.html',
  styleUrls: ['./pacprot.component.css']
})
export class PacprotComponent implements OnInit {

 x: any;
  car = [];
  types: SelectItem[];
  show = true;
  constructor( private pacienteService: PacienteService,private router: Router) {

    this.types = [];
    this.types.push({title: 'lista', value: 'list', icon: 'fa fa-list'});
    this.types.push({title: 'Grid', value: 'grid', icon: 'fa fa-th'});
    
      }


      
  ngOnInit() {
    this.lista();
  }




  lista(){
    this.pacienteService.consultarPacProt()
    .then(dados =>{
      this.car= dados;
      this.show =false;
     
     this.x ='Nenhum paciente com exame encontrado!'
    }).catch(erro =>{
      this.show =false;
      this.x ='Ocorreu algum erro inesperado, pacientes não encontrados'
    })
  }
}
