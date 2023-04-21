import { Component, OnInit } from '@angular/core';
import { PaService } from '../pa.service';

@Component({
  selector: 'app-pa',
  templateUrl: './pa.component.html',
  styleUrls: ['./pa.component.css']
})
export class PaComponent implements OnInit {
  painel: any;

  constructor(private paservice : PaService) { }

  ngOnInit() {
    this.consulta();
  }

  consulta(){
    
    this.paservice.Buscar()
    .then(dados => {
      this.painel = dados;
      console.log(dados);


    });

  }

}
