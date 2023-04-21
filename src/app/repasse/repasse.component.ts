import { RepasseService } from './repasse.service';
import { Component, OnInit } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-repasse',
  templateUrl: './repasse.component.html',
  styleUrls: ['./repasse.component.css']
})
export class RepasseComponent implements OnInit {
  repasse = [];
  repassepd = [];
  label = [];
  tipo = '1';
  show = true;
  x = true;
  y=false;
  display = false;
  constructor(private repasseService: RepasseService) { 
    this.label = [
      {label:'Repasses gerados', value: '1'},
      {label:'Repasses pendentes', value: '2'}

  ];
  }
  ngOnInit() {
   //this.consultaRepPD();
   this.consulta();
    }

    consulta() {

      this.repasseService.consultar()
      .then(dados => {
        this.repasse = dados;
        this.show = false;
      }).catch(erro => {
        this.show = false;
      });
    }
    showDialog() {

      this.display = true;
  }

   consultaRepItem(repasse: string){
    
    this.repasseService.getRepasseItem(repasse)
    .then(dados => {
  
    })
    .catch(erro => {
    
    });
   }

   consultaRepPD(){

    this.show = true;
    this.repasseService.getRepassePend()
    .then(dados => {
     this.repassepd = dados;
     this.show = false;
    })
    .catch(erro => {
      this.show = false;
    });
   }

   alteraFlash() {
   
   if(this.tipo === '1'){
     this.y =false;
     this.x =true;
      this.consulta();

    } else {
      this.x =false;
      this.y =true;
          this.consultaRepPD();

    }
    
  }

}
