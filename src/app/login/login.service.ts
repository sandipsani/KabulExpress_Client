import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { login } from 'src/Model/login';
import { JwtInterceptorService } from '../jwt-interceptor.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient,private jwthelperservice:JwtHelperService) {
   
  }
  currentUserName: any = "";
  imgUrl:any;

  loginUser(login: login): Observable<any> {

    return this.http.post<any>("https://localhost:7231/api/Authentication", login)

      .pipe(map(u => {

        if (u) {
          this.currentUserName = u.name;
          this.imgUrl = u.profileUrl;
        }
        return u;
      }))

  }
  public isAuthenticated(): boolean {
    debugger
    if (this.jwthelperservice.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }

}
