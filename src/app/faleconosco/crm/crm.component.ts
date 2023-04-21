import { FalaconoscoService } from './../falaconosco.service';
import { Component, OnInit } from '@angular/core';
import { Comunicado } from '../../model/model';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {


  comunicado: Comunicado;
  show = true;

  constructor(private faleconoscoService: FalaconoscoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.consultaComunicaco();
  }


  consultaComunicaco(){

    this.faleconoscoService.consultarComunicados()
     .then(dados =>  {

      this.comunicado = dados;
      this.show = false;
        }).catch(erro => {
          this.show = false;
          this.messageService.add({ severity: 'error', detail: 'Ops... Ocorreu algum erro na comunicação' });
        });


  }

}
