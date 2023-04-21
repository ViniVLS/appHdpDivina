import { Injectable } from '@angular/core';
import { HdpHttp } from '../seguranca/hdp-http';
import { AuthService } from '../seguranca/auth.service';
import { ResponseContentType } from '@angular/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CclinicoService {

  //end ='http://localhost:8080/trl/';
  end ='https://app.divinaprovidencia.org.br/hdp-api/';
  url ='https://app.divinaprovidencia.org.br/hdp-api/';

  constructor(  private http: HdpHttp,
    private auth: AuthService,
    private cclinico: CclinicoService
    ) { }




    consultar(): Promise<any> {

      const teste = this.auth.jwtPayload.cod;
  
   //  return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/paciente/' + teste)
    return this.http.get(this.end+'/trl/' + teste)
        .toPromise();
       
    }


    consultarInd(): Promise<any> {
      return this.http.get('http://localhost:8080/nps/ind')
      .toPromise();
    }


    consultarNps(): Promise<any> {

      const teste = this.auth.jwtPayload.cod;
  
   //  return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/paciente/' + teste)
    return this.http.get(this.url+'nps/' + teste)
        .toPromise();
    }

    buscaAnexo(boleto: string): Observable<Blob> {
  
      return this.http.get(this.url+'anexo/'+boleto, { responseType: 'blob' });  
     
      
      
   
    }
}
