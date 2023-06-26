import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerUser } from 'src/Model/register';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // Url: string;

  constructor(private http: HttpClient) {
    // this.Url = 'https://localhost:7231/api/Register/AddUser';
  }

  CreateUser(register: registerUser): Observable<any> {
    
    return this.http.post<any>("https://localhost:7231/api/Register/AddUser", register)
  }
}
