import { Component, OnInit } from '@angular/core';
import { CclinicoService } from '../cclinico.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cclinico',
  templateUrl: './cclinico.component.html',
  styleUrls: ['./cclinico.component.css']
})
export class CclinicoComponent implements OnInit {
dados =[];
varatual = 600000.00;
lineChartData: any;
  constructor(private cclinicoService: CclinicoService,
    private messageService: MessageService,) { }

  ngOnInit() {
   this.geraInd();
  }

  consulta() {
  

    this.cclinicoService.consultar()
    .then(dados => {
      this.dados =dados;

    }).catch(erro => {
     
      });
}

geraInd(){
 
  this.cclinicoService.consultarInd()
  .then(dados =>{
    console.log(dados);

    this.lineChartData ={
      labels: dados.map(dado => dado.metrica),

      datasets: [
       
        {
          label: 'Meta',
          data: dados.map(dado => dado.meta),
          borderColor: 'red',
        
         
        },
        {
    
          label: 'Realizado',
          data: dados.map(dado => dado.realizado),
        
          backgroundColor: ['#4bc0c0'],
          borderColor: '#3366CC',
         
        },
      ]
    }
    
  });
}


consultanps() {

  this.cclinicoService.consultarNps()
  .then(dados => {
   console.log(dados);
  this.lineChartData ={
    labels: dados.map(dado => dado.mesano),
    datasets: [
      {
        label: 'NPS',
        data: dados.map(dado => dado.nps),
        backgroundColor: ['#4bc0c0']
       
      }
    ]
  };
 
}).catch(erro =>{


})

}

/*
 bt(boleto: string){
  
 this.cclinicoService.buscaAnexo(boleto).subscribe(x =>{
  var newBlob = new Blob([x], { type: "application/pdf" });

  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(newBlob);
    return;
}
const data = window.URL.createObjectURL(newBlob);
  window.open(data);
  
  
 },
 err => {this.messageService.add({ severity: 'error', detail: 'erro' })}
 
 
 );
}
 

*/
 bt(boleto: string){
  this.cclinicoService.buscaAnexo(boleto).subscribe((data) =>{
  var blob = new Blob([data], {type: 'application/pdf'});

  var downloadURL = window.URL.createObjectURL(data);
  var link = document.createElement('a');
  link.href = downloadURL;
  link.download = "Boleto_DivinaProvidencia.pdf";
  link.click();

});
 }


}