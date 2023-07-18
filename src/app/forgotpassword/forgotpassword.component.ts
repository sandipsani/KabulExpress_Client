import { Component } from '@angular/core';
import { resetPassword } from 'src/Model/resetPassword';
import { ForgotpasswordService } from './forgotpassword.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent {
  constructor(private resetPasswordService : ForgotpasswordService,private router:Router){}
  
  resetPasswordModel: resetPassword = new resetPassword();
 
  onFormSubmit() {
    debugger
    this.resetPasswordService.ResetPassword(this.resetPasswordModel).subscribe(
      (response)=>{
        console.log(response);
        if (response.sendOTP===true)
        {
          localStorage.setItem("phoneKey",response.phoneNumber); 
          this.router.navigate(['/resetpassword']);

        }
        
      },
      (error)=>{
        console.log(error);
      }
    )
   

  }

}
