import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resetPassword } from 'src/Model/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class ForgotpasswordService {

  constructor(private http:HttpClient) { }

  ResetPassword(resetmodel: resetPassword): Observable<any> {
 debugger
    resetmodel.otp="";
    resetmodel.password="";
    return this.http.post<any>("https://localhost:7231/api/ResetPassword", resetmodel)

  }

}
