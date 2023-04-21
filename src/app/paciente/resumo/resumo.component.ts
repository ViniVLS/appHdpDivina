import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumoPaciente } from '../../model/model';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {

  resumop = new ResumoPaciente();
  show = true;
  link: string;

  constructor(private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const codigoLancamento = this.route.snapshot.params['codigo'];
    this.consultax(codigoLancamento);

      }

      teste(atend: string){
        this.router.navigate(['/cdi/pacex/'+this.resumop.atendimento]);
      }

  consultax(atend) {

    this.pacienteService.consultaResumo(atend)
    .then(dados => {
       this.resumop = dados;
      this.show = false;

     this.link = 'http://200.180.131.50/laudos/buscatasy.asp?txtNroPrescricao=' + this.resumop.laudo;

    });


    }


}
