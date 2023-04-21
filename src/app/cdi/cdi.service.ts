import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from '../seguranca/hdp-http';
import { ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CdiService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }




    consultar():  Promise<any> {

      const teste = this.auth.jwtPayload.cod;
  
    return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/paciente/pacexame')
// return this.http.get('http://localhost:8080/paciente/pacexame') 
        .toPromise();
    }

    consultarExamesIm(codigoLancamento: string): Promise<any> {

     return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/exames/0/'+codigoLancamento)
  //  return this.http.get('http://localhost:8080/exames/0/'+codigoLancamento)
        .toPromise();
    }
    consultarExamesLb(codigoLancamento: string): Promise<any> {

      return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/exames/1/'+codigoLancamento)
   // return this.http.get('http://localhost:8080/exames/1/'+codigoLancamento)
        .toPromise();
    }


    consultarLaudo(laudo: string): Observable<Blob>  {

     
  
    return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/laudo/'+laudo,{ responseType: 'blob' })
    // return this.http.get('http://localhost:8080/laudo/'+laudo,{ responseType: 'blob' });
    }
    consultarLaudoLB(laudo: string): Observable<Blob>  {

       
     return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/laudo/1/'+laudo,{ responseType: 'blob' })
    // return this.http.get('http://localhost:8080/laudo/1/'+laudo,{ responseType: 'blob' });
     }
 

    
}

