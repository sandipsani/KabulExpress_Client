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
  loading: boolean = false;
  
  constructor(private loginservice: LoginService,private router:Router) { }
  onFormSubmit() {
    this.loading = true; // Show the spinner

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
    ).add(() => {
      this.loading = false; // Hide the spinner
    });
  }
}
