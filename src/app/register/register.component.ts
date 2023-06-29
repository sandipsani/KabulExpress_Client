import { Component } from '@angular/core';
import { registerUser } from 'src/Model/register';
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  constructor(private registerService: RegisterService, private router: Router) { }
  
  model:registerUser= new registerUser();

  onFormSubmit() {
    debugger
    sessionStorage.setItem("phoneNumber","+91" + this.model.phoneNumber)
    this.registerService.CreateUser(this.model).subscribe(
      response => {
        if(response.status!=null)
        {
          Swal.fire('Attention', response.status, 'error');
        }
      else
      {
        debugger
        Swal.fire('Congrates', 'You are registered ','success');
        this.router.navigate(['/verifyphone']);
      }     
      },
      error => {
        console.log(error.error);
        if (error.error === "User with email already exists") {
          debugger;
          Swal.fire('Attention', error.error, 'error');         
        }
        else if (error.error ==="User with phone already exists")
        {
          Swal.fire('Attention', error.error, 'error');
        }
        else{
          Swal.fire('Attention', 'Something Went Wrong', 'error');
        }
       
      }
    );
  }
}
