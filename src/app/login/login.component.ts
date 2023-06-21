import { Component } from '@angular/core';
import { login } from 'src/Model/login';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: login = new login();
  
  constructor(private loginservice: LoginService) { }
  onFormSubmit() {
   debugger
    this.loginservice.loginUser(this.model).subscribe(
      response => {
       console.log(response);
      },
      error => {
        console.log(error);
        
      }
    );
  }
}
