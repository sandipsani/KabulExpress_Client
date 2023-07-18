import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { menutype } from 'src/Model/menutype';

@Injectable({
  providedIn: 'root'
})
export class MenutypemenuTypeDialogService {

  constructor(private http: HttpClient) { }
  GetMenuTypes(): Observable<any> {
    return this.http.get<any>("https://localhost:7231/api/Menu/GetMenuType");
  }



}
