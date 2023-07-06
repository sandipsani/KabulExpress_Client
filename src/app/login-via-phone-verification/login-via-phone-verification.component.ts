import { Component } from '@angular/core';
import { resendOtp } from 'src/Model/resendOtp';
import { verifyotp } from 'src/Model/verifyotp';

@Component({
  selector: 'app-login-via-phone-verification',
  templateUrl: './login-via-phone-verification.component.html',
  styleUrls: ['./login-via-phone-verification.component.scss']
})
export class LoginViaPhoneVerificationComponent {

  otp: verifyotp = new verifyotp();
  inputnumber: resendOtp = new resendOtp();
  _phoneNumber: any;
  otpsubmit() {
    debugger
    this._phoneNumber = sessionStorage.getItem("phoneNumber")
    

    

  }
  resendOTP() {
   
  }
}
