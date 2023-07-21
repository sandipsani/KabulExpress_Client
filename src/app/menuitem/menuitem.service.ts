import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuitemService {

  constructor(private http: HttpClient) { }
  GetMenuTypes(): Observable<any> {
    return this.http.get<any>("https://localhost:7231/api/Menu/GetMenuItem");
  }
  GetMenuItems(): Observable<any> {
    return this.http.get<any>("https://localhost:7231/api/Menu/GetMenuItem");
  }
   DeleteMenuItem(id: any): Observable<any> {
     return this.http.delete<any>(`https://localhost:7231/api/Menu/RemoveMenuItem?ItemId=${id}`);
  }

}
