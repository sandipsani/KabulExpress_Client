import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { VerifyphoneService } from './verify-phone/verifyphone.service';

@Injectable({
  providedIn: 'root'
})
export class CanactivategaurdService {

  constructor(private loginservice :LoginService,private router :Router,private jwthelperservice: JwtHelperService,private verifyviaphone:VerifyphoneService) { }

  canActivate(route:ActivatedRouteSnapshot):boolean
  {
    var token = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')as string).token:null;
    if(this.loginservice.isAuthenticated())
    {
      return true;
    }
    if (this.verifyviaphone.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
