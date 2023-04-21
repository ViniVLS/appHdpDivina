import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coremanejo',
  templateUrl: './coremanejo.component.html',
  styleUrls: ['./coremanejo.component.css']
})
export class CoremanejoComponent implements OnInit {

  paciente = [];
  show = true;
  display= false;



  constructor(private router: Router,
    private pacienteService: PacienteService) { }

  ngOnInit() {
    this.consulta();
  }




  consulta() {

    this.pacienteService.consultarCoremanejo()
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
