import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from '../seguranca/hdp-http';

@Injectable({
  providedIn: 'root'
})
export class AgendaCirurgicaService {

  url ='https://app.divinaprovidencia.org.br/hdp-api/';
  urlx ='http://localhost:8080/';
  constructor(private http: HdpHttp,
    private auth: AuthService,) { }


  consultar(datadia : string): Promise<any> {

    const esb = this.auth.jwtPayload.estab;
    const filtro = 'T';


    return this.http.get(this.url+ `agendas/cirurgica/filtro?tipoConsulta=${filtro}&datadia=${datadia}&estab=${esb}`)
      .toPromise();
     
  }

  filtro(filtro : string, datadia: string): Promise<any> {

    const esb = this.auth.jwtPayload.estab;
    return this.http.get(this.url+`agendas/cirurgica/filtro?tipoConsulta=${filtro}&datadia=${datadia}&estab=${esb}`)
        .toPromise();
       
    }
    
  

}
