import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get('https://localhost:7231/api/Register/GetUsers');
  }
}
