import { Injectable } from '@angular/core';

import { Http } from '@angular/http';



@Injectable()
export class CepService {



  constructor(private http: Http) { }


  consultar(): Promise<any> {
    return this.http.get('https://viacep.com.br/ws/91215089/json')
      .toPromise()
      .then(response => response.json())
  }

}
