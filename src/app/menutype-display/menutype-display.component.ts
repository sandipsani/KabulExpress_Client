import { Component, OnInit } from '@angular/core';
import { MenutypemenuTypeDialogService } from '../menutype/menutypemenu-type-dialog.service';

@Component({
  selector: 'app-menutype-display',
  templateUrl: './menutype-display.component.html',
  styleUrls: ['./menutype-display.component.scss']
})
export class MenutypeDisplayComponent implements OnInit {
  constructor(private  menutypeservice:MenutypemenuTypeDialogService){}
  menuTypes: any[] = [];

  ngOnInit(): void {
    this.GetAllMenuTypes();
  }
  GetAllMenuTypes()
  {
      this.menutypeservice.GetMenuTypes().subscribe(
      (response)=>{
        debugger
        this.menuTypes=response;
        console.log(response);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  
}
