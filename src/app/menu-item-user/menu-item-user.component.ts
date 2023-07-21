import { Component,OnInit } from '@angular/core';
import { SharedService } from '../sharedservice/shared.service';
import { menuitem } from 'src/Model/menuitem';
import { MenutypedisplayService } from '../menutype-display/menutypedisplay.service';

@Component({
  selector: 'app-menu-item-user',
  templateUrl: './menu-item-user.component.html',
  styleUrls: ['./menu-item-user.component.scss']
})
export class MenuItemUserComponent implements OnInit {
  menuItems: any[] = [];
  constructor(private sharedService: SharedService, private menutypedisplayservice: MenutypedisplayService,){
  
  }
ngOnInit(): void {
  debugger
  const id = sessionStorage.getItem('typeid');
 this.menutypedisplayservice.GetMenuItemsById(id).subscribe(
(res)=>{
  this.menuItems=res;
},
(err)=>{
  console.log(err)
}

 )
}

}
