
import { Injectable } from '@angular/core';

import { environment } from './../../environments/environment';
import { AuthService } from './auth.service';
import { HdpHttp } from './hdp-http';

@Injectable()
export class LogoutService {



  constructor(
    private http: HdpHttp,
    private auth: AuthService
  ) {

  }

  logout() {
    return this.http.delete('https://app.divinaprovidencia.org.br/hdp-api/tokens/revoke', { withCredentials: true })
      .toPromise()
      .then(() => {
        this.auth.limparAccessToken();

      });
  }

}
