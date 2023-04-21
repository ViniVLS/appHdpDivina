import { Injectable } from '@angular/core';
import { AuthService } from '../seguranca/auth.service';
import { HdpHttp } from './../seguranca/hdp-http';
import { HttpHeaders } from '@angular/common/http';
import { Usuario, Pessoa } from '../model/model';


@Injectable()
export class UsuarioService {

  constructor(private http: HdpHttp,
    private auth: AuthService) { }



    consultar(cod: string): Promise<any> {


     return this.http.get('https://app.divinaprovidencia.org.br/hdp-api/usuarios/cadastro/' + cod)
    //  return this.http.get('http://localhost:8080/usuarios/cadastro/' + cod)
        .toPromise();


    }

    cadastrar(cod: Pessoa): Promise<any> {
     // const headers = new HttpHeaders()
   //   .append('Content-Type', 'application/json');

      return this.http.post('https://app.divinaprovidencia.org.br/hdp-api/usuarios/cadastro/', JSON.stringify(cod) )
    //  return this.http.post('http://localhost:8080/usuarios/cadastro/',   JSON.stringify(cod) )
        .toPromise();
    }

    cadastrarx(cod: Pessoa): Promise<any> {
      // const headers = new HttpHeaders()
    //   .append('Content-Type', 'application/json');
 
       return this.http.post('https://app.divinaprovidencia.org.br/hdp-api/usuarios/cadastrox/',   JSON.stringify(cod) )
     //  return this.http.post('http://localhost:8080/usuarios/cadastrox/',   JSON.stringify(cod) )
         .toPromise();
     }
 







    
  





}
