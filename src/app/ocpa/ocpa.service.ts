import { Injectable } from '@angular/core';

import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from './../seguranca/hdp-http';

@Injectable()
export class OcpaService {
  // url = 'http://localhost:8080/ocpa/';
   url = 'https://app.divinaprovidencia.org.br/hdp-api/ocpa/';
  constructor(private http: HdpHttp,
    private auth: AuthService) { }

    consultar(tipo: string) {
      return this.http.get<any>(this.url + tipo)
      .toPromise();


      
    }
    consultarStatus() {
      return this.http.get<any>(this.url+'status')
      .toPromise();


      
    }
    


}
