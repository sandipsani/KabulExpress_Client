import { Component } from '@angular/core';
import { ActivatedRoute,Params, Router } from '@angular/router';
import { EmailverificationService } from './emailverification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.scss']
})
export class EmailverificationComponent {
  constructor(private activatedRoute: ActivatedRoute,private emailverification :EmailverificationService,private router:Router){}
  useremail: any;
  onSubmit(): void {
    debugger
    this.activatedRoute.queryParams.subscribe((params: Params) => {
     
      this.useremail = params;
      console.log(this.useremail.mail);

      this.emailverification.sendmail(this.useremail.mail).subscribe(
        (res) => {
         if(res==true)
         {
           Swal.fire({
             position: 'center',
             icon: 'success',
             title: 'You email now verified',
             showConfirmButton: false,
             timer: 2000
           })
           this.router.navigate(['/login']);
         }
        else{
           Swal.fire('Attention', 'Already verified', 'error');
           this.router.navigate(['/login']);
        }
        }
      )
    });
   
  }
}
