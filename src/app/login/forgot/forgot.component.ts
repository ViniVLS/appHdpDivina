import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../seguranca/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  teste = true;
  erro: {titulo: string, mgs: string};

  constructor( private messageService: MessageService,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }


  showResponse(event) {
    this.teste = false;

}


solicita(form: NgForm) {

if (!form.valid) {
  this.messageService.add({ severity: 'info', detail: 'Preencha todos os campos' });


} else {
this.auth.solicitacaoSenha(form.value.cpf, form.value.email)
.then(resultado => {
  this.messageService.add({ severity: 'success', detail: 'Solicitação realizada com sucesso!  Em breve  você recebera um e-mail com uma nova senha!' });

  this.router.navigate(['/login']);
}).catch(resultado => {

  this.messageService.add({ severity: 'error', detail: resultado.error });

       });


}


}

}
