import { Comunicado } from './../../model/model';
import { Component, OnInit } from '@angular/core';
import { FalaconoscoService } from '../falaconosco.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-fale',
  templateUrl: './fale.component.html',
  styleUrls: ['./fale.component.css']
})
export class FaleComponent implements OnInit {

  text: string;
  comunicado : Comunicado;
  show = false;

  constructor( private faleconoscoService: FalaconoscoService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.consulta();
  }

  teste() {
  this.show = true;
   this.faleconoscoService.envioComunicado(this.text)
    .then(dados =>  {

      this.comunicado = dados;
      this.messageService.add({ severity: 'success', detail: 'Comunicação enviada com sucesso!' });
     
     this.consulta();
     this.text =null;
     this.show = false;
       })
       .catch(erro => {
        this.messageService.add({ severity: 'error', detail: 'Ops, ocorreu algum erro...' });
         this.show = false;
  });
   // console.log(this.text);
  }

  consulta() {

    this.faleconoscoService.consultar()
     .then(dados =>  {

      this.comunicado = dados;
        });
    // console.log(this.text);
   }

}
