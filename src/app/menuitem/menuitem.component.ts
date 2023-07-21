import { Component ,OnInit} from '@angular/core';
import { MatDialogRef ,MatDialog} from '@angular/material/dialog';

import { MenuitemdialogComponent } from '../menuitemdialog/menuitemdialog.component';
import { MenuitemService } from './menuitem.service';
import Swal from 'sweetalert2';
import { menuitem } from 'src/Model/menuitem';
import { menutype } from 'src/Model/menutype';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent implements OnInit  {
  menuItems: any[] = [];
  menuitem: menuitem = new menuitem();
  headingTitle: string = '';
  constructor(public dialog: MatDialog, private menuitemservice: MenuitemService){}
  ngOnInit(): void {
    this.GetAllMenuItems();

  }
  openMenuItem() {
    debugger
    if(this.menuitem.id==null)
    {
      this.headingTitle = 'Add Menu Item';
      const dialogRef = this.dialog.open(MenuitemdialogComponent, {
        height: '700px',
        width: '600px',
        data: { headingTitle: this.headingTitle, id: null }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.GetAllMenuItems();
      });
    }
    else {
      debugger
      this.headingTitle = 'Edit Menu Item';
      const dialogRef = this.dialog.open(MenuitemdialogComponent, {
        height: '700px',
        width: '600px',
        data: { id: this.menuitem.id, typeName: this.menuitem.name, description: this.menuitem.description, price: this.menuitem.price, typeid: this.menuitem.menutype, headingTitle: this.headingTitle }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.GetAllMenuItems();
        this.menuitem.id = null;
      });
    }
    }
  
 
GetAllMenuItems()
{
  this.menuitemservice.GetMenuItems().subscribe(
    (res)=>{
      debugger
      this.menuItems=res;
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
  )
}
  DeleteMenuItem(id:any)
  {
   this.menuitemservice.DeleteMenuItem(id).subscribe(
      (response)=>{
        debugger
        console.log(response)
       Swal.fire('Congrats', response.message , 'success');
        this.GetAllMenuItems();
      },
      (error)=>{
        debugger
        Swal.fire('warning',error.error,'warning');
      }
    )
  }
  editMenuItem(id: any) {
    debugger
    const menuitems = this.menuItems.find(item => item.id === id);
    this.menuitem.id = menuitems.id;
    this.menuitem.name = menuitems.menuItemName;
    this.menuitem.description = menuitems.menuItemDescription;
    this.menuitem.price = menuitems.menuItemPrice;
    this.menuitem.menutype = menuitems.menuTypeId;

    this.openMenuItem();

  }
  
}
