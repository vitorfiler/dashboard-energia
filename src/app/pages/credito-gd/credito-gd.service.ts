import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CreditoGdService {

  constructor(private http: HttpClient) {}

    baseUrl = `${environment.URL_AWS}/gd`;

    getGeracaoDistribuida(clienteId: string): Promise<any> {
        let promisse = this.http
            .get(`${this.baseUrl}`, {
                params: {
                    clienteID: clienteId
                },
                observe: "response",
            }).toPromise();
        return promisse;
    }
}
