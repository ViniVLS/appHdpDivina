import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from '../seguranca/hdp-http';

@Injectable({
  providedIn: 'root'
})
export class PaheService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }





    
 consultarPa(): Promise<any> {

  const teste = this.auth.jwtPayload.cod;

 return this.http.get('https://app.divinaprovidencia.org.br/hdp-api//pa/he')
 //return this.http.get('http://localhost:8080/pa/he')
    .toPromise();
}
}
