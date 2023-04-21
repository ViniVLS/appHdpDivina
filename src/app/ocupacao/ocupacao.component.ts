import { OcupacaoService } from './ocupacao.service';
import { Component, OnInit } from '@angular/core';
import { Ocupacao } from '../model/model';
// import { Ocupacao } from '../model/model';

@Component({
  selector: 'app-repasse',
  templateUrl: './ocupacao.component.html',
  styleUrls: ['./ocupacao.component.css']
})
export class OcupacaoComponent implements OnInit {
  ocupacao = new Ocupacao();
  ocupacaoTotal = [];
  show = true;
  display = false;
  constructor(private ocupacaoService: OcupacaoService,
    ) { }

  ngOnInit() {
  this.buscaTotal();
        }

    busca() {
      this.ocupacaoService.consultar()
    .then(dados => {
      this.ocupacao = dados;


    });
    }

    buscaTotal() {
      this.ocupacaoService.consultarTotal()
    .then(total => {
      this.ocupacaoTotal = total;
     // console.log(total);

      this.busca();
        });
    }


}
