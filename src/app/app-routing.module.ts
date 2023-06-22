import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginViaPhoneComponent } from './login-via-phone/login-via-phone.component';
import { CanactivategaurdService } from './canactivategaurd.service';




const routes: Routes = [
  // { path: '', component: HomeComponent, canActivate: [CanactivategaurdService] },
  { path: 'home', component: HomeComponent, canActivate: [CanactivategaurdService] },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'loginviaphone', component: LoginViaPhoneComponent },
  { path: '', redirectTo:'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
