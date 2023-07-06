import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { resendOtp } from 'src/Model/resendOtp';
import { verifyotp } from 'src/Model/verifyotp';
import { LoginviaphoneService } from './loginviaphone.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-via-phone',
  templateUrl: './login-via-phone.component.html',
  styleUrls: ['./login-via-phone.component.scss']
})
export class LoginViaPhoneComponent {
  otp: verifyotp = new verifyotp();
constructor(private router:Router,private http:HttpClient,private loginwithphoneservice:LoginviaphoneService)
{}
  otpsubmit() {
    debugger
    this.otp.otp="";
    this.loginwithphoneservice.sendphone(this.otp).subscribe(
      (res)=>{
        debugger
        if (res.sendOTP===true)
        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: res.sendOTP.message,
            showConfirmButton: false,
            timer: 2000
          })
          sessionStorage.setItem("phoneNumber", this.otp.phoneNumber);
          sessionStorage.setItem("verifyviaphone", "true");
          this.router.navigate(['/verifyphone']);
        }
      },
      (error)=>{
        sessionStorage.setItem("loginviaphone", "true");
        Swal.fire('Attention', error.error.message, 'error');
        // console.log(error);
      }
    )
  }
}
