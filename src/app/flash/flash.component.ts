import { FlashService } from './flash.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { Flash } from './../model/model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {

  // flash = new Flash[];
 // flash: Flash[] = new Array<Flash>() ;
 // flashdt : Flash[] = new Array<Flash>() ;
 flash = [];
 flashdt = [];
  cti = true;
  cities1 ;
  tipo = '1';
  show = true;

  constructor(private flashService: FlashService,
    private messageService: MessageService) {
      this.cities1 = [
        {label:'Flash 1ªUI/1ºCTI ', value: '2'},
        {label:'Flash CTI Adulto/Cir ', value: '1'}

    ];
    }

  ngOnInit() {
    this.geraFlash();
    this.geraFlashdt();


  }

  geraFlash() {
    this.flashService.consultar(this.tipo)
    .then(dados =>  this.flash = dados)
    .catch(erro => {
      this.messageService.add({ severity: 'error', detail: 'Algo ocorreu!' })
            console.log(erro);
    });
  }

  geraFlashdt() {
    this.flashService.consultardt(this.tipo)
    .then(retorno => {
      this.flashdt = retorno;
      this.show = false;
    })
    .catch(erro => {
       this.show = false;
    });
  }

  alteraFlash() {
    this.show = true;
    if(this.tipo === '1'){
    this.cti = true;
    } else {
      this.cti = false;
    }
    this.geraFlash();
    this.geraFlashdt();
  }

}
