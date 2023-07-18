import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { menutype } from 'src/Model/menutype';

@Injectable({
  providedIn: 'root'
})
export class MenutypeService {

  constructor(private http: HttpClient) { }
  addmenu(formData: FormData): Observable<any> {
    return this.http.post<any>("https://localhost:7231/api/Menu/AddMenuType", formData);
  }
EditMenuType(formData:FormData):Observable<any>
{
  return this.http.put<any>("https://localhost:7231/api/Menu/EditMenuType",formData);
}
  DeleteMenuType(id: any): Observable<any> {
    return this.http.delete<any>(`https://localhost:7231/api/Menu/DeleteMenuType?id=${id}`);
  }
}
