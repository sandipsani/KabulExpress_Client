import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { resendOtp } from 'src/Model/resendOtp';
import { verifyotp } from 'src/Model/verifyotp';

@Injectable({
  providedIn: 'root'
})
export class VerifyphoneService {

  constructor(private http: HttpClient, private jwthelperservice:JwtHelperService) { }


  VerifyOtp(otp:verifyotp): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/v1/Register/Verify",otp);
  }


  resendOtp(phone: resendOtp): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/ResendOTP",phone);
  }


  verifyviaphone(otp:verifyotp):Observable<any>
  {
    debugger
    return this.http.post<any>("https://localhost:7231/api/Authentication/Phone",otp);
  }


  public isAuthenticated(): boolean {
    if (this.jwthelperservice.isTokenExpired()) {
      return false;
    } else {
      return true;
    }
  }
}
