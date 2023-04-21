import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from './../seguranca/hdp-http';


@Injectable()
export class FlashService {
  // url = 'http://localhost:8080/flash/';
  url = 'https://app.divinaprovidencia.org.br/hdp-api/flash/';
  constructor(private http: HdpHttp,
    private auth: AuthService) { }


    consultar(tipo: string){
      return this.http.get<any>(this.url + tipo)
      .toPromise();
      }
consultardt(tipo: string) {
  return this.http.get<any>(this.url + '/flashdt/' + tipo)
    .toPromise();
}
}
