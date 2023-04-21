import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FalaconoscoService } from '../falaconosco.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { AuthService } from '../../seguranca/auth.service';
import { Editor } from 'primeng/components/editor/editor';

@Component({
  selector: 'app-resposta',
  templateUrl: './resposta.component.html',
  styleUrls: ['./resposta.component.css']
})
export class RespostaComponent implements OnInit {

  text : string;
textop: string;
solicitacao: string;
habilita = true;
mgs ='Ops... ocorreu algum erro na comunicação';


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private faleconoscoService: FalaconoscoService,
    private messageService: MessageService,
    private  auth: AuthService

  ) { }




  ngOnInit() {
    this.solicitacao = this.route.snapshot.params['codigo'];
    this.consultaComunicado();
    this.consultarHitorico();



  }

   enviar() {
    this.faleconoscoService.envioHistorico(this.text, this.solicitacao)
    .then( dados => {
      this.messageService.add({ severity: 'success', detail: 'Resposta salva com sucesso!' });
      this.router.navigate(['/crm']);
    }).catch(dados => {
      this.messageService.add({ severity: 'error', detail: this.mgs });
    });

   }
   consultaComunicado() {

     this.faleconoscoService.consultarComunicado(this.solicitacao)
     .then(dados =>     this.textop = dados.comunicado)
     .catch(dados =>  {
      this.messageService.add({ severity: 'error', detail: this.mgs});
      
     });

   }


   temPermissao(permissao: string) {
    return this.auth.temPermissao(permissao);
   }

   consultarHitorico() {
    this.faleconoscoService.consultarHistorico(this.solicitacao)
    .then(dados =>  {

      this.text = dados.ds_HISTORICO;
      if(dados.ds_HISTORICO =='Aguardando resposta'){
       this.habilita = false;
      }
      console.log(dados.ds_HISTORICO);
        }).catch(dados =>  {


        }) ;

}

}
