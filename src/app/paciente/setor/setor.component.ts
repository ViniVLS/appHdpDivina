import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-setor',
  templateUrl: './setor.component.html',
  styleUrls: ['./setor.component.css']
})
export class SetorComponent implements OnInit {

  listap = [];
  ds_setor = ' ';
  constructor(private pacienteService: PacienteService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const setor = this.route.snapshot.params['codigo'];
    this.consultaSetor(setor);
    }

  consultaSetor(setor: string) {
 this.pacienteService.consultarSetor(setor)
 .then(dados => {

    this.listap = dados;
   this.ds_setor = dados[0].ds_SETOR_ATENDIMENTO;
   console.log(dados);
 })
 .catch(erro => {
   console.log(erro);
 });

  }
}
