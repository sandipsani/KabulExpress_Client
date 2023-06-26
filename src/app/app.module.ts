import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginViaPhoneComponent } from './login-via-phone/login-via-phone.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { MenuComponent } from './menu/menu.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    LoginViaPhoneComponent,
    MenuComponent,
    VerifyPhoneComponent,
    AboutComponent
 
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
    FormsModule,
    
  ],
  providers: [
  {provide:HTTP_INTERCEPTORS,
  useClass:JwtInterceptorService,
  multi:true
  }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
