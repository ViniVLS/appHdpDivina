import { PacienteService } from './../paciente.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit {
paciente = [];
show = true;
display= false;
  constructor(private router: Router,
  private pacienteService: PacienteService
  ) { }

  ngOnInit() {
  this.consulta();
  }

  consulta() {

    this.pacienteService.consultar()
    .then(dados => {
      this.paciente = dados;
      this.show = false;
    }).catch(resultado => {
      this.show = false;
      this.display = false;
      });
  }
  showDialog() {
    this.display = true;
}


}
