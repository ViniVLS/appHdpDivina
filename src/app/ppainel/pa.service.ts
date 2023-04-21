import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from '../seguranca/hdp-http';

@Injectable({
  providedIn: 'root'
})
export class PaService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }



  Buscar(): Promise<any> {

    const esb = this.auth.jwtPayload.estab;
   
  

  //  return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/ocupacao/'+esb)
    return this.http.get('http://localhost:8080/painel/pa')
        .toPromise();
  }

}
