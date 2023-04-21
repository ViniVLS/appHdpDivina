import { Usuario, Pessoa } from './../../model/model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

cadastro =  new Pessoa;
senha = '';

  constructor( private usuarioService: UsuarioService,
    private messageService: MessageService) { }


  ngOnInit() {

  }



  buscar() {

    this.senha ='';
  this.usuarioService.consultar(this.cadastro.id)
  .then(dados => {
    this.cadastro =  new Pessoa;
    this.cadastro = dados;
   

  })
  .catch(erro => {
    this.cadastro =  new Pessoa;
    this.messageService.add({ severity: 'error', detail: erro.error.txt });
  });

  }

  cadastrar(){
    if(this.cadastro.expirasenha){
    
    this.usuarioService.cadastrarx(this.cadastro)
  .then(dados => {
    this.senha =dados.txt;
    this.messageService.add({ severity: 'success', detail: 'Cadastro atualizado com sucesso!' });
  })
  .catch(erro => {
   
    this.messageService.add({ severity: 'error', detail: 'Erro ao atualizar' });
  });
    }
    
    else {
      this.usuarioService.cadastrar(this.cadastro)
  .then(dados => {
 
    this.messageService.add({ severity: 'success', detail: 'Cadastro atualizado com sucesso!' });
  })
  .catch(erro => {
    this.messageService.add({ severity: 'error', detail: 'Erro ao atualizar' });
  });
    }
  }
}
