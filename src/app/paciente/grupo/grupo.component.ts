import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-grupo',
  templateUrl: './grupo.component.html',
  styleUrls: ['./grupo.component.css']
})
export class GrupoComponent implements OnInit {
  paciente = [];
  show = true;
  display= false;
  ativo =true;
    constructor(// private router: Router,
    private pacienteService: PacienteService
    ) { }
      ngOnInit() {
    this.consulta();
    }
    consulta() {
        this.pacienteService.consultarGrupo()
      .then(dados => {
        this.paciente = dados;
        this.show = false;
      }).catch(resultado => {
        this.display = false;
        });
    }
    showDialog() {
      this.display = true;
  }

  tem(paciente) {
    console.log(paciente);
  }
    }
