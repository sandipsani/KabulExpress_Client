import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginViaPhoneComponent } from './login-via-phone/login-via-phone.component';
import { CanactivategaurdService } from './canactivategaurd.service';
import { MenuComponent } from './menu/menu.component';
import { VerifyPhoneComponent } from './verify-phone/verify-phone.component';




const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [CanactivategaurdService] },
  { path: 'home', component: HomeComponent, canActivate: [CanactivategaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'menu', component: MenuComponent, canActivate: [CanactivategaurdService] },
  {path:'verifyphone', component:VerifyPhoneComponent},
  { path: 'loginviaphone', component: LoginViaPhoneComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
