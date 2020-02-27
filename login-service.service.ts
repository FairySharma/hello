import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }

  AuthLogin(userauth): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type', '/application/json');
    return this.http.post("",userauth,{headers:headers}).pipe(map(res => res));
  }

}
