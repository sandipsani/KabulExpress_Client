import { Component } from '@angular/core';
import { registerUser } from 'src/Model/register';
import { RegisterService } from '../register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  constructor(private registerService: RegisterService) { }
  
  model:registerUser= new registerUser();

  onFormSubmit() {
    
    this.registerService.CreateUser(this.model).subscribe(
      response => {
        // console.log(response.error.isValid);
        // alert(response.error.isValid);
       
        if(response.status!=null)
        {
          Swal.fire('Attention', response.status, 'error');
        }
      else{
          Swal.fire('Congrates', 'You are registered Now you can login!', 'success');
      }     
      },
      error => {
        console.log(error.error.isValid);
        if (error.error.isValid === false) {
       
          debugger;
          var errorMessage = error.error.validationMessages.join("<br>");
          Swal.fire('Attention', errorMessage, 'error');
         
        }
       
      }
    );
  }
}
