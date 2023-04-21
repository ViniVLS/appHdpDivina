import { Sol } from './../../model/model';

import { MediciniaService } from './../medicinia.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../../seguranca/auth.service';

@Component({
  selector: 'app-aplicacao',
  templateUrl: './aplicacao.component.html',
  styleUrls: ['./aplicacao.component.css']
})
export class AplicacaoComponent implements OnInit {


   sol: Sol = new Sol();
   show = true;


  constructor( private mediciniaService: MediciniaService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
 //   this.mediciniaService.login();
    this.sol.id = this.route.snapshot.params['codigo'];
    this.consultaNotificacao();

  }

    consultaNotificacao() {
    this.mediciniaService.consultaNotificacao(this.sol.id)
    .then(resultado => {
      this.sol = resultado;
      this.show = false;

    }).catch(erro => {
      this.show = false;
    });
  }
 entrar() {
     this.router.navigate(['/login']);
 }
}
