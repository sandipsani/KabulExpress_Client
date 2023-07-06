import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';
import { empty } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'KabulExpress_Client';

  constructor(private router: Router, public loginService:LoginService){}
  imgurl:any;
  userName:any;


  ngOnInit() {
    debugger
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const user = JSON.parse(currentUser);
      this.loginService.imgUrl = user.profileUrl;
      this.loginService.currentUserName=user.name;
    }
    

  }

  isLoggedIn() {
    const token = localStorage.getItem('currentUser');
    if (token != null)
    return true
    else
    return false
  }
  logout(): void {
    this.loginService.imgUrl='';
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

//   getprofile()
//   {
//     debugger
//     const currentUserString = localStorage.getItem('currentUser');
   
    
//     if (currentUserString !== null) {
     
//       //  const currentUser = JSON.parse(currentUserString);
//       //  this.imgurl = currentUser.profileUrl;
//       //  this.userName=currentUser.name;
//       // var currentUser: any = sessionStorage.getItem('currentUser');

//       // var userDetail: any = JSON.parse(currentUser);

//       // this.loginService.currentUserName = userDetail.email; 
//       // this.loginService.imgUrl = userDetail.profileUrl;


//       // this.imgurl = currentUser.profileUrl;
//       //  this.userName=currentUser.name;
//       //this.currentUserEmail=sessionStorage.getItem('currentUserEmail');
//   }
// }
}
