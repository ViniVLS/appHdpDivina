import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MediciniaService {


 url = 'https://app.divinaprovidencia.org.br/hdp-api/appaplic/';
  // url = 'http://localhost:8080/appaplic/';
  constructor(private http: HttpClient) { }




  consultaNotificacao(seq: string): Promise<any> {
    // console.log(seq);
    const headers = new  HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorizationx', 'Basic YW5ndWxhcjpAbmd1bEByMA==');
    return this.http.get(this.url + seq,{headers})
      .toPromise()
      .then(response => response);
  }


}


