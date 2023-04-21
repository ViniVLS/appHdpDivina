import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AgendaCirurgicaService } from '../agenda-cirurgica.service';

@Component({
  selector: 'app-agenda-cirurgica',
  templateUrl: './agenda-cirurgica.component.html',
  styleUrls: ['./agenda-cirurgica.component.css']
})
export class AgendaCirurgicaComponent implements OnInit {
  dt = new Date();
  pt_BR: any;
  xx: string;
  agenda =[];
  totagenda :String;
totaut :String;
totopme :String;
totint :String;
  constructor(private agendaCirurgicaService: AgendaCirurgicaService) { }

  ngOnInit() {
    this.consultaAgenda();
    this.pt_BR = {
      firstDayOfWeek: 0,
      dayNames: [ 'Domingo',"Segunda","Terça","Quarta","Quinta","Sexta","Sábado" ],
      dayNamesShort: [ "dom","seg","ter","qua","qui","sex","sáb" ],
      dayNamesMin: [ "D","S","T","Q","Q","S","S" ],
      monthNames: [ "Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro" ],
      monthNamesShort: [ "Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez" ],
      today: 'Hoje',
      clear: 'Limpar'
    };
  }

  consultaAgenda(){
    this.xx =  moment(this.dt).format('DD-MM-YYYY');
    
    this.agendaCirurgicaService.consultar(this.xx)
    .then(resultado => {
      this.totagenda = resultado.totagenda;
      this.totaut = resultado.totaut;
      this.totopme = resultado.totopme;
      this.totint = resultado.totint;
      this.agenda =resultado.agenda;

           }).catch(resultado => {
            console.log(resultado);
            });
    
    
  }

  filtro(tipo : string){
    this.xx =  moment(this.dt).format('DD-MM-YYYY');
    this.agendaCirurgicaService.filtro(tipo,this.xx )
    .then(resultado => {
      this.totagenda = resultado.totagenda;
      this.totaut = resultado.totaut;
      this.totopme = resultado.totopme;
      this.totint = resultado.totint;
      this.agenda =resultado.agenda;

           }).catch(resultado => {
            console.log(resultado);
            });
  }

}
