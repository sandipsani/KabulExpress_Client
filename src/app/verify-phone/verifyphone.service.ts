import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resendOtp } from 'src/Model/resendOtp';
import { verifyotp } from 'src/Model/verifyotp';

@Injectable({
  providedIn: 'root'
})
export class VerifyphoneService {

  constructor(private http: HttpClient) { }


  VerifyOtp(otp:verifyotp): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/v1/Register/Verify",otp);
  }


  resendOtp(phone: resendOtp): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/ResendOTP",phone);
  }
}
