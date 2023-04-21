import { AuthService } from './../seguranca/auth.service';
import { Injectable } from '@angular/core';

import { Http } from '@angular/http';


import { Mgs } from '../model/model';
import { HdpHttp } from './../seguranca/hdp-http';



@Injectable()
export class FalaconoscoService {

 mgs: Mgs;
    constructor(private http: HdpHttp,
      private auth: AuthService
                 ) { }




                 envioComunicado(txt: string): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;
                  this.mgs = {'medico': medico, 'txt': txt , 'comunicado' : ''} ;

                 return this.http.post('https://app.divinaprovidencia.org.br/hdp-api/faleconosco/', this.mgs)
                 // return this.http.post('https://200.180.131.54:8443/hdp-api/faleconosco/', this.mgs)
             //   return this.http.post('http://localhost:8080/faleconosco/', this.mgs)
                   .toPromise();
                }

                consultar(): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;
                 return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/faleconosco/' + medico)
                 // return this.http.get('https://200.180.131.54:8443/hdp-api/faleconosco/' + medico)
                // return this.http.get('http://localhost:8080/faleconosco/' + medico)

                     .toPromise();

                 }

                 envioHistorico(txth: string, id: string): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;
                  this.mgs = {'medico': medico, 'txt': txth, 'comunicado' : id} ;

                    return this.http.post('https://app.divinaprovidencia.org.br/hdp-api/comunicacao/', this.mgs)
               //    return this.http.post('https://200.180.131.54:8443/hdp-api/comunicacao/', this.mgs)
                // return this.http.post('http://localhost:8080/comunicacao/', this.mgs)
                   .toPromise();


                }

                consultarComunicado(cod: string): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;
                   return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/faleconosco/cm/' + cod)
            //  return this.http.get('http://localhost:8080/faleconosco/cm/' + cod)
               /// return this.http.get('https://200.180.131.54:8443/hdp-api/faleconosco/cm/' + cod)
                     .toPromise();
                }


                 consultarHistorico(cod: string): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;

                  return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/comunicacao/' + cod)
             //   return this.http.get('http://localhost:8080/comunicacao/' + cod)
                  // return this.http.get('https://200.180.131.54:8443/hdp-api/comunicacao/' + cod)
                     .toPromise();
                 }


                 consultarComunicados(): Promise<any> {
                  const medico = this.auth.jwtPayload.cod;
                  return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/faleconosco/')
              //  return this.http.get('https://200.180.131.54:8443/hdp-api/faleconosco/')
               // return this.http.get('http://localhost:8080/faleconosco/')
                     .toPromise();

                 }

}
