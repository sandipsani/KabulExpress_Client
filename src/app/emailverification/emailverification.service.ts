import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailverificationService {

  constructor(private httpclient:HttpClient) { }
  sendmail(mail:string) {
    debugger
    return this.httpclient.get<any>("https://localhost:7231/api/v1/Register/VerifyMail?mail=" + mail);
  }
}
