import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root",
})
export class GraficoDemandaService {
    constructor(private http: HttpClient) {}
    baseUrl = `${environment.URL_AWS}/demanda`;

    getDemanda(clientId: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}`, {
                params: {
                    clienteID: clientId,
                },
                observe: "response",
            });
    }
    getFinanceiro(clientId: string): Observable<any> {
        return this.http
            .get(`${this.baseUrl}`, {
                params: {
                    clienteID: clientId,
                },
                observe: "response",
            })
    }
}
