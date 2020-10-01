import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: "root",
})
export class UnidadesService {
    public static listTableUnidades: any[] = [];
    constructor(private http: HttpClient) {}

    baseUrl = `${environment.URL_AWS}/tabela`;

    getDadosUnidadesConsumidoras(clienteId: string,mesFatu: string): Promise<any> {
        let promisse = this.http
            .get(`${this.baseUrl}`, {
                params: {
                    clienteID: clienteId,
                    mes_fatu: mesFatu,
                },
                observe: "response",
            }).toPromise();
        return promisse;
    }

    TABLE_UNIDADES: any = [
        {
            tabela: [
                {
                    UC: [20127693, 44730586, 46412700, 61197165, 61894427],
                    competencia: [
                        "03/2020",
                        "03/2020",
                        "03/2020",
                        "03/2020",
                        "03/2020",
                    ],
                    cidade: [
                        "FLORESTOPOLIS",
                        null,
                        "SAO SEBASTIAO DA AMORE",
                        "PRESIDENTE CASTELO BRANCO",
                        null,
                    ],
                    NF: [null, null, null, null, null],
                    subGrupo: [
                        "MT - Verde",
                        "MT - Verde",
                        "MT - Verde",
                        "MT - Verde",
                        "MT - Verde",
                    ],
                    consumoConvencional: [0.0, 0.0, 0.0, 0.0, 0.0],
                    consumoPonta: [1156.0, 1227.0, 8579.0, 40.0, 420.0],
                    consumoForaPonta: [
                        12241.0,
                        5152.0,
                        68429.0,
                        1509.0,
                        2052.0,
                    ],
                    consumoPorGD: [0.0, 2104.0, 0.0, 0.0, 1209.0],
                    ICMS: [3831.38, 1791.03, 19562.0, 447.36, 670.47],
                    PIS: [141.63, 63.21, 717.6, 18.17, 22.96],
                    COFINS: [652.15, 291.08, 3299.49, 83.56, 105.86],
                    valorTotal: [13409.8, 6127.25, 67517.5, 1798.06, 2309.37],
                },
            ],
        },
    ];
}
