import { Component } from '@angular/core';



import { Router } from '@angular/router';
@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.scss']
})
export class AddmenuComponent {

  constructor(private router:Router) {

  }
  openMenuType() {
    // Navigate to /products page
    this.router.navigate(['/menutype']);
  }
  openMenuItem()
  {
    debugger
    this.router.navigate(['/menuitem']);
  }
}

