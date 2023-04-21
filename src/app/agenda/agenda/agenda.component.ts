import { Response } from '@angular/http';
import { AgendaService } from './../agenda.service';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
dt = new Date();
pt_BR: any;
  agenda = [];
xx: string;
lendo: boolean;
  constructor(private agendaService: AgendaService) { }

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
        this.lendo =true;
        this.xx = moment(this.dt).format('DD/MM/YYYY');
        this.agendaService.consultaAgenda(this.xx)
        .then(resultado => {
          this.agenda = resultado;
          this.lendo =false;

               }).catch(resultado => {
                this.lendo = false;
                });

      }


}
