import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from './../seguranca/hdp-http';



@Injectable()
export class OcupacaoService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }






    consultar(): Promise<any> {

    const esb = this.auth.jwtPayload.estab;
   
  

    return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/ocupacao/'+esb)
   // return this.http.get('http://localhost:8080/ocupacao/'+esb)
        .toPromise();

    }
    consultarTotal(): Promise<any> {

      const esb = this.auth.jwtPayload.estab;
       return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/ocupacao/total/'+esb)
  // return this.http.get('http://localhost:8080/ocupacao/total/'+esb)
        .toPromise();


    }

}
