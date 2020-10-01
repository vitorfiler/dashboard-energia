import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Unidade } from '../_models/unidade';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, private routes: ActivatedRoute) { }
  baseURL = `${environment.URL_AWS}/consumo`;
  urlLogin = `${environment.URL_LOGIN}`;
  loginTemporario = "https://stupgt8i64.execute-api.sa-east-1.amazonaws.com/prod/get/login";
  
  getConsumo(clientId: String): Observable<Unidade[]> {
      return this.http.get<Unidade[]>(
          `${this.baseURL}?clienteID=${clientId}`
      );
  }
  
  login(username: string, password: string): Promise<any> {
      let promisse = this.http
          .get(this.loginTemporario, {
              params: {
                  Login: username,
                  Senha: password,
              },
              observe: "response",
          })
          .toPromise();
      return promisse;
  }

validaSessao(){
  let token = localStorage.getItem("token");
  if(token == null || token == '' || token == 'undefined'){
    return false;
  }
  return true;
}
}
