import { AuthService } from './../seguranca/auth.service';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';


import { HdpHttp } from '../seguranca/hdp-http';


@Injectable()
export class AgendaService {

  constructor(
    private http: HdpHttp,
    private auth: AuthService
  ) { }






  consultaAgenda(datadia: string): Promise<any> {
    const medico = this.auth.jwtPayload.cod;
  return this.http.get(`https://app.divinaprovidencia.org.br/hdp-api/agendas/agendas?cd_medico=${medico}&datadia=${datadia}`)

    // return this.http.get(`http://localhost:8080/agendas/agendas?cd_medico=${medico}&datadia=${datadia}`)
  
      .toPromise()
      .catch(response => {

     // return Promise.reject(response);
      });
  }


}
