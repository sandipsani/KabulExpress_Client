import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/Model/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
   
  }

  loginUser(login: login): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/Authentication", login)
  }
}
