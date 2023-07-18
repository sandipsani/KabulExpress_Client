import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resetPassword } from 'src/Model/resetPassword';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {

  constructor(private http:HttpClient) { }
  SetPassword(resetmodel: resetPassword): Observable<any> {
    return this.http.post<any>("https://localhost:7231/api/ResetPassword", resetmodel)

  }
}
