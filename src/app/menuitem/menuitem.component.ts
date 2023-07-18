import { Component } from '@angular/core';
import { MatDialogRef ,MatDialog} from '@angular/material/dialog';

import { MenuitemdialogComponent } from '../menuitemdialog/menuitemdialog.component';

@Component({
  selector: 'app-menuitem',
  templateUrl: './menuitem.component.html',
  styleUrls: ['./menuitem.component.scss']
})
export class MenuitemComponent {

  constructor(public dialog: MatDialog){}
  openMenuItem() {
    debugger
      const dialogRef = this.dialog.open(MenuitemdialogComponent, {
        height: '600px',
        width: '600px',
        data: {  }
      });
      dialogRef.afterClosed().subscribe(result => {
      
      });
    }
 

  
}
