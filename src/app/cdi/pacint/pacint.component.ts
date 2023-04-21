import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { CdiService } from '../cdi.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pacint',
  templateUrl: './pacint.component.html',
  styleUrls: ['./pacint.component.css']
})
export class PacintComponent implements OnInit {
  types: SelectItem[];
  x="Carregando";
  show = true;
 car = [];
  constructor(private cdiservice: CdiService,
    private router: Router ) { 


    this.types = [];
    this.types.push({title: 'lista', value: 'list', icon: 'fa fa-list'});
    this.types.push({title: 'Grid', value: 'grid', icon: 'fa fa-th'});
    
  }

  ngOnInit() {
    this.lista();
  }
 
  lista(){
    this.cdiservice.consultar()
    .then(dados =>{
      this.car= dados;
     this.show=false;
     
     this.x ='Nenhum paciente com exame encontrado!'
    }).catch(erro =>{
      this.show =false;
      this.x ='Ocorreu algum erro inesperado, pacientes não encontrados'
    })
  }


 
  teste(atend: string){
    this.router.navigate(['/cdi/pacex/'+atend]);
  }
  
}
