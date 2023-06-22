import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    debugger;
    var currentUser={token:""};
    var currentUserSession = localStorage.getItem('currentUser');
    
  
    if(currentUserSession!=null)
    {  
        currentUser=JSON.parse(currentUserSession);
      }
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token 
      }
    });

    return next.handle(request);
  }
  
}
