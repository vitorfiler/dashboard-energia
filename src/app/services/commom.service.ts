import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from "@angular/material/snack-bar";
import { LoginService } from './login.service';



@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient,
              private route: Router,
              private snackBar: MatSnackBar,
              private loginService: LoginService
    ) { }

headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  logout(){
    this.route.navigate(['/login']);
  }

  // get(urlName: string): Observable<any>{
  //    return this.http.get(`${environment.url}${urlName}`,{observe: "response"});

  // }
  
  // post(urlName: string, body: string): Promise<any> {

  //   let promise = this.http.post(`${environment.url}${urlName}`, body, { observe: "response", headers: this.headers }).toPromise();
  //   return promise
  // }

  // postMokoon(urlName: string, string: string): Observable<any>{
  //   return this.http.post(`${environment.url}${urlName}`, string, { observe: "response", headers: this.headers });
  // }

  // put(urlName: string, body: string, clientId: string): Observable<any> {
  //   return this.http.put(`${environment.url}${urlName}`, body, { params: {
  //     clienteID: clientId, }, observe: "response", headers: this.headers });
  // }

  // delete(urlName: string): Promise<any> {
  //   let promise = this.http.get(`${environment.url}${urlName}`, { observe: "response", headers: this.headers }).toPromise();
  //   return promise
  // }

  // public upload(formData): Promise<any> {

  //   return this.http.post<any>(`${environment.url}/Arquivos`, formData, {
  //     reportProgress: true,
  //     observe: 'response'
  //   }).toPromise();
  // }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  validaSessao(){
    return this.loginService.validaSessao();  
  }
  
}
