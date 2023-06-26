import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }
  getAllmenu(): Observable<any> {
    return this.http.get('https://localhost:7231/api/Menu/GetMenuList');
  }
}
