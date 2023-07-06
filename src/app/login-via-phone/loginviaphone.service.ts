import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { verifyotp } from 'src/Model/verifyotp';

@Injectable({
  providedIn: 'root'
})
export class LoginviaphoneService {

  constructor(private http:HttpClient) { }
  sendphone(phone:verifyotp): Observable<any> {
    debugger
    return this.http.post<any>("https://localhost:7231/api/Authentication/Phone", phone);
  }
}
