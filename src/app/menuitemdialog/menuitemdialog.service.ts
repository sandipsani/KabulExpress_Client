import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MenuitemdialogService {

  constructor(private http:HttpClient) { }
  addmenuitem(formData: FormData): Observable<any> {
    return this.http.post<any>("https://localhost:7231/api/Menu/MenuItem", formData);
  }
  updatemenuitem(formData: FormData): Observable<any> 
  {
    return this.http.put<any>("https://localhost:7231/api/Menu/EditMenuItem", formData);
  }
}
