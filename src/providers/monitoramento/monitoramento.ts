import { Monitoramento } from './../../models/monitoramento';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MonitoramentoProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MonitoramentoProvider {

  private url = "http://165.227.78.113:3000/api/monitoramentos";

  constructor(public http: AuthHttp) {
  }

  postMonitoramento(monitoramento: Monitoramento): Observable<Monitoramento>{
    return this.http.post(this.url, monitoramento)
      .map(payload => payload.json())
  }

  putMonitoramento(monitoramento: Monitoramento): Observable<Monitoramento>{
    return this.http.put(`${this.url}/${monitoramento._id}`, monitoramento)
      .map(payload => payload.json())
  }
}
