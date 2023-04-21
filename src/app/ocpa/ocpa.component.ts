import { OcupacaoTotal, OC, OCPA } from './../model/model';
import { OcpaService } from './ocpa.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-ocpa',
  templateUrl: './ocpa.component.html',
  styleUrls: ['./ocpa.component.css']

})
export class OcpaComponent implements OnInit {
lista: OCPA;      //lista1: [] ;
lista2: OCPA;
listaStatus = [];
total = 0;
totalat = 0;
atualizacao = '';
show = true;
  constructor(private ocpaService: OcpaService,
    private messageService: MessageService) { }

  ngOnInit() {
    this.geraLista2();
    this.geraLista();
     this.geraLista3()

     }

  geraLista() {
 this.ocpaService.consultar('24')
 .then(result => {
   this.lista2 = result;
this.total = this.lista2[0].total_espera;
this.totalat = this.lista[0].total_pa;
this.atualizacao = this.lista[0].atualizacao;
this.totalat = this.lista2[0].total_emat;
this.show = false;
  }).catch(erro => {
  this.show = false;
 // this.toasty.error('Ocorreu algum problema na comunicação');

 });
  }
  geraLista2() {
    this.ocpaService.consultar('1')
    .then(result => {
      this.lista = result;
         }).catch(erro => {
           erro.
     this.show = false;
     // this.toasty.error('Ocorreu algum problema na comunicação');
       });
      }

      geraLista3() {
        this.ocpaService.consultarStatus()
        .then(result => {
          this.listaStatus = result;
          this.show = false;
        
             }).catch(erro => {
               erro.
         this.show = false;
         // this.toasty.error('Ocorreu algum problema na comunicação');
           });
          }
    }
