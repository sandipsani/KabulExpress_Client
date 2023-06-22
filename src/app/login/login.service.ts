import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/Model/login';
import { JwtInterceptorService } from '../jwt-interceptor.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient,private jwthelperservice:JwtHelperService) {
   
  }

  loginUser(login: login): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/Authentication", login)
  }
  public isAuthenticated(): boolean {
    if (this.jwthelperservice.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }
}
