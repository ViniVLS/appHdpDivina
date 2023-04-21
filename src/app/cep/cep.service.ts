import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from '../seguranca/hdp-http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }

    consultar(evento: string):  Promise<any> {

      
  
   // return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/paciente/pacexame')
 return this.http.get('http://localhost:8080/eventos/evento/'+evento) 
        .toPromise();
    }



    
    inscricao(colaborador: string):  Promise<any> {

      
  
      // return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/paciente/pacexame')
    return this.http.get('http://localhost:8080/eventos/inscricao/'+colaborador) 
           .toPromise();
       }

}
