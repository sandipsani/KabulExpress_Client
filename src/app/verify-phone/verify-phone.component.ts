import { Component } from '@angular/core';
import { VerifyphoneService } from './verifyphone.service';
import { verifyotp } from 'src/Model/verifyotp';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { resendOtp } from 'src/Model/resendOtp';



@Component({
  selector: 'app-verify-phone',
  templateUrl: './verify-phone.component.html',
  styleUrls: ['./verify-phone.component.scss']
})
export class VerifyPhoneComponent {

  constructor(private verifyphone: VerifyphoneService,private router:Router) { }
  otp: verifyotp = new verifyotp();
  inputnumber: resendOtp=new resendOtp();
  _phoneNumber:any;
  isverifyviaphone : any; 

  otpsubmit() {
    debugger
    this._phoneNumber=  sessionStorage.getItem("phoneNumber")
    this.otp.phoneNumber = this._phoneNumber;

    this.isverifyviaphone = sessionStorage.getItem("verifyviaphone");


    if (this.isverifyviaphone===false) 
    {
      debugger
      this.verifyphone.VerifyOtp(this.otp).subscribe(
        (response) => {
          debugger;
          if (response === true) {
            Swal.fire('', 'Thank you for confirming your number. Now you can login. Please check your email, we have sent an email confirmation link.', 'success');
            // this.router.navigate(['/login']);
          }
          if (response === false) {
            Swal.fire('', 'Failed to verify', 'error');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else
    {
      this.verifyphone.verifyviaphone(this.otp).subscribe(
        (response) => {
          debugger;
          console.log(response);
          localStorage.setItem("currentUser", JSON.stringify(response)); 
          this.router.navigate(['/home']);
        },
        (error) => {
          console.log(error);
        }
      );

    }
  }
 resendOTP()
 {
debugger
  this._phoneNumber = sessionStorage.getItem("phoneNumber");
  this.inputnumber.phoneNumber = this._phoneNumber;
   this.verifyphone.resendOtp(this.inputnumber).subscribe(
    (response)=>{
      console.log(response);
      alert(response);
      if(response===true)
      {
        Swal.fire('', 'Your otp has been sent', 'success');
      }
    else
    {
        Swal.fire('', 'Failed to send otp ', 'error');
    }
    },
    (error)=>{
      debugger
      if(error.status===404)
      {
        Swal.fire('', 'user not found ', 'error');
      }
      console.log(error);
    }
   )
 }
}

