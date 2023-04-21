import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';




@Component({
  selector: 'app-avalespecialista',
  templateUrl: './avalespecialista.component.html',
  styleUrls: ['./avalespecialista.component.css']
})
export class AvalespecialistaComponent implements OnInit {
  solicitacoes = [];
  show = true;
  display= false;
  Content: any;
  ds_tipo_parecer ='';
  displayd= false;
  ds_motivo_consulta ='';
  dt_liberacao='';




  constructor(private router: Router,
     private pacienteService: PacienteService
    ) { }

  ngOnInit() {
    this.consultaSolicitacoes();
  }

  consultaSolicitacoes(){
    this.pacienteService.consultarSolicitacoes()
    .then(dados => {
      this.solicitacoes = dados;
      this.show = false;


    }).catch(resultado => {
      this.show = false;
      this.display = false;
      });
  }
  showDialog() {

    this.display = true ;
}
showDialogx() {

  this.display = false;
}
aval(x: string){

 this.pacienteService.consultaTxtAval(x)

 .then(dados => {
  this.ds_tipo_parecer= dados.ds_tipo_parecer;
  this.ds_motivo_consulta =dados.ds_motivo_consulta;
  this.dt_liberacao = dados.dt_liberacao;


 })

  this.displayd = true;
}

}
