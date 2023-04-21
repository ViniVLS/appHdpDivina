import { Component, OnInit } from '@angular/core';
import { CdiService } from '../cdi.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Paciente }  from '../../model/model';;







@Component({
  selector: 'app-examesimg',
  templateUrl: './examesimg.component.html',
  styleUrls: ['./examesimg.component.css']
})

@Injectable({

  providedIn: 'root'

})
export class ExamesimgComponent implements OnInit {

 // host  ='200.180.131.52:8081';                  //='192.168.5.12:8090';
  host  ='imagens.divinaprovidencia.org.br:8090';
  endpoint ='/study/auth/1?';
  secret ='2ed9a03e117e7c00289b8f4985b33da01fe28419';
   url ='';
   tipo = '1';
   playload: string;
  label = [];
  codigoLancamento: any;
  

pac = new Paciente;
exames = [];

  constructor(private cdiService: CdiService,
    private route: ActivatedRoute,
    private router: Router) {
      this.label = [
        {label:'Exames de imagens', value: '1'},
        {label:'Exames laboratoriais  ', value: '2'}

    ];

     }

  ngOnInit() {
 //this.play('6211151');
    this.codigoLancamento = this.route.snapshot.params['nr_atendimento'];
    
  this.consultaExamesim(this.codigoLancamento);
  }

  consultaExamesim(codigoLancamento: string){
    this.cdiService.consultarExamesIm(codigoLancamento)
    .then(dados =>{
      this.exames = dados;
     this.pac = dados[0].paciente;
      console.log(dados);
     
  
    }).catch(erro =>{
      console.log(erro);
    })
  }

  consultaExameslb(codigoLancamento: string){
    this.cdiService.consultarExamesLb(codigoLancamento)
    .then(dados =>{
      this.exames = dados;
     this.pac = dados[0].paciente;

     
  
    }).catch(erro =>{
      console.log(erro);
    })
  }
  consultaLaudo(laudo: string){
    if(this.tipo ==='1'){
    this.cdiService.consultarLaudo(laudo)
    .subscribe(laudo =>{
     const url = window.URL.createObjectURL(laudo);

        window.open(url);
      
    
    //   var blob = new Blob([laudo], {type: 'application/pdf'});

    //    var downloadURL = window.URL.createObjectURL(laudo);
   //  var link = document.createElement('a');
  //     link.href = downloadURL;
    //  link.download = "Boleto_DivinaProvidencia.pdf";
    //   link.click();



     
  
    })
  }
  else{
    this.cdiService.consultarLaudoLB(laudo)
    .subscribe(laudo =>{
     const url = window.URL.createObjectURL(laudo);
     console.log(laudo);

        window.open(url);
  
})
  }
}

  alteraFlash() {
   
    if(this.tipo === '1'){
      this.consultaExamesim(this.codigoLancamento);
    } else {
      this.consultaExameslb(this.codigoLancamento);

    }
    
  }


  play(payloadx){
    this.playload = '';
    this.playload+=payloadx;
    payloadx =this.playload;
    

    this.url = this.host+this.endpoint

    this.url+='a='+payloadx;
   
    
   
    const date = new Date();
   
    date.setDate(date.getDate() + 3);
   
    var timestamp = date.getTime(); //epoch on MILIseconds
   
    timestamp = Math.round(timestamp / 1000) + 86400; //epoch on seconds
   
   payloadx+=timestamp;
   
    this.url +='&t='+timestamp;
    const hash = CryptoJS.HmacSHA1(payloadx,this.secret);
    const hmac = hash.toString(CryptoJS.enc.Hex);
    this.url+='&h='+hmac;
    this.url+='&r=1';
   
    
   this.route.url
      
   
       console.log(this.url);
       var link = document.createElement('a');
       link.href = 'http://'+this.url;
      // link.download = "Boleto_DivinaProvidencia.pdf";
      // link.click();
      const url ='http://'+this.url;
       window.open(url);
  
  }

}
