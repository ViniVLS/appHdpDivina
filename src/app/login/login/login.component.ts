import { AuthService } from './../../seguranca/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
  private auth: AuthService,
  private messageService: MessageService,
) { }

  ngOnInit() {
  }

  login(form: NgForm) {
      this.auth.login(form.value.usuario, form.value.senha)
      .then(() => {
       if( this.auth.temPermissao('ROLE_CRM')) {
         console.log(this.auth.temPermissao('ROLE_CRM'));
        this.router.navigate(['/crm']);
       }  if ( this.auth.temPermissao('ROLE_CONSULTA')) {

         this.router.navigate(['/faleconosco']);
       } if ( this.auth.temPermissao('ROLE_OC')) {
         this.router.navigate(['/ocupacao']);
      }
      }).catch(erro => {
       
        this.messageService.add({ severity: 'error', detail: erro });

      });

  }
}
