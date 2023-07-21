import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenutypedisplayService {

  constructor(private http:HttpClient) { }

  GetMenuItemsById(id: any): Observable<any> {
    debugger
    return this.http.get<any>(`https://localhost:7231/api/Menu/GetMenuItemByMenuType?id=${id}`);
  }
}
