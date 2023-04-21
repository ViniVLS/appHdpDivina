import { Injectable } from '@angular/core';
import { AuthService } from './../seguranca/auth.service';
import { Http, Response } from '@angular/http';


import { HdpHttp } from './../seguranca/hdp-http';


@Injectable()
export class RepasseService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }





    consultar(): Promise<any> {

      const teste = this.auth.jwtPayload.cod;
      return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/repasse/' + teste)
  
    //return this.http.get('http://localhost:8080/repasse/' + teste)
        .toPromise();


    }


    getRepasseItem(repasse: string): Promise<any> {

      const teste = this.auth.jwtPayload.cod;
  return this.http.get(`https://app.divinaprovidencia.org.br/hdp-api/repasse/item?codigo=${teste}&nr_repasse=${repasse}`)

   //  return this.http.get(`http://localhost:8080/repasse/item?codigo=${teste}&nr_repasse=${repasse}`)
        .toPromise();


    }

    getRepassePend(): Promise<any> {
    const teste = this.auth.jwtPayload.cod;
    return this.http.get(`https://app.divinaprovidencia.org.br/hdp-api/repasse/pd?codigo=${teste}`)
        .toPromise();


    }

}
