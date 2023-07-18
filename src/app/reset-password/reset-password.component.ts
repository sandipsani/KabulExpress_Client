import { Component } from '@angular/core';
import { resetPassword } from 'src/Model/resetPassword';
import { ResetpasswordService } from './resetpassword.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  resetPasswordModel: resetPassword = new resetPassword();
constructor(private resetpasswordservice:ResetpasswordService,private router:Router){}

onSubmit()
{
  debugger
  this.resetPasswordModel.phoneNumber = localStorage.getItem('phoneKey');
 this.resetpasswordservice.SetPassword(this.resetPasswordModel).subscribe(
   response => {
    debugger
     console.log(response.message); // Access the message property
     Swal.fire('Congrates', response.message, 'success');
     this.router.navigate(['/login']);
     
   },
  (error)=>{
    console.log(error);
    Swal.fire('Attention',error, 'error');
  }
 )

}
}
