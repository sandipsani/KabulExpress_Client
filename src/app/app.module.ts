import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { LoginViaPhoneComponent } from './login-via-phone/login-via-phone.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MenuComponent } from './menu/menu.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';
import { AboutComponent } from './about/about.component';
import { EmailverificationComponent } from './emailverification/emailverification.component';
import { LoginViaPhoneVerificationComponent } from './login-via-phone-verification/login-via-phone-verification.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MaterialModule } from './material/material.module';
import { MenutypeComponent } from './menutype/menutype.component';
import { MenuTypeDialogComponent } from './menu-type-dialog/menu-type-dialog.component';
import { MenutypeDisplayComponent } from './menutype-display/menutype-display.component';
import { MenuitemComponent } from './menuitem/menuitem.component';
import { MenuitemdialogComponent } from './menuitemdialog/menuitemdialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginViaPhoneComponent,
    MenuComponent,
    VerifyPhoneComponent,
    AboutComponent,
    EmailverificationComponent,
    LoginViaPhoneVerificationComponent,
    ForgotpasswordComponent,
    ResetPasswordComponent,
    AddmenuComponent,
    MenutypeComponent,
    MenuTypeDialogComponent,
    MenutypeDisplayComponent,
    MenuitemComponent,
    MenuitemdialogComponent

  ],
  imports: [
    JwtModule.forRoot({
    config:{
      tokenGetter:()=>{
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') as string).token : null;
      }
    }

    }),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
    
    ],
  providers: [
  {provide:HTTP_INTERCEPTORS,
  useClass:JwtInterceptorService,
  multi:true
  },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
