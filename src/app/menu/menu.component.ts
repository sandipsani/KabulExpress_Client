import { Component } from '@angular/core';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuData: any[] = []; // Assign an empty array as the initial value

  constructor(private menuservice: MenuService) { }

  ngOnInit() {
    this.menuservice.getAllmenu().subscribe(data => {
      this.menuData = data; // Assign the retrieved data to the menuData property
      console.log(data);
    });
  }
}
