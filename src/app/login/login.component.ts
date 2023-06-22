import { Component } from '@angular/core';
import { login } from 'src/Model/login';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  model: login = new login();
  
  constructor(private loginservice: LoginService,private router:Router) { }
  onFormSubmit() {
   debugger
    this.loginservice.loginUser(this.model).subscribe(
      response => {
        console.log(response);
        localStorage.setItem("currentUser", JSON.stringify(response)); 
        this.router.navigate(['/home']);
      
      },
      error => {
        console.error(error);
        Swal.fire('Attention', "Please check username or password", 'error');
      }
    );
  }
}
