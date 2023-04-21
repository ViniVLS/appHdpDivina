import { Component, OnInit } from '@angular/core';

import { CepService } from '../cep.service';

@Component({
  selector: 'app-treinamento',
  templateUrl: './treinamento.component.html',
  styleUrls: ['./treinamento.component.css']
})
export class TreinamentoComponent implements OnInit {
evento ="";
  label = [];
  constructor(private cepservice: CepService) { }

  ngOnInit() {
  }

  consultar(){

    this.cepservice.consultar(this.evento)
    .then( x => {
      this.label =x;

    } );

  }



  inscricao(){

    this.cepservice.consultar(this.evento)
    .then( x => {
      //this.label.inscritos.push(x);

    } );

  }
}
