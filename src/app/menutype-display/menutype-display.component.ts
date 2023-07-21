import { Component, OnInit } from '@angular/core';
import { MenutypemenuTypeDialogService } from '../menutype/menutypemenu-type-dialog.service';
import { MenutypedisplayService } from './menutypedisplay.service';
import { SharedService } from '../sharedservice/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menutype-display',
  templateUrl: './menutype-display.component.html',
  styleUrls: ['./menutype-display.component.scss']
})
export class MenutypeDisplayComponent implements OnInit {
  constructor(private menutypeservice: MenutypemenuTypeDialogService, private menutypedisplayservice: MenutypedisplayService, private sharedService: SharedService,private router:Router){}
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
  GetMenuType(id:any)
  {
   this.menutypedisplayservice.GetMenuItemsById(id).subscribe(
    (res)=>{
      debugger
      console.log(res)
      //  this.sharedService.setData(res);
       sessionStorage.setItem('typeid', id);
       this.router.navigate(['/menuitemuser']);
    },
    (err)=>{
      console.log(err);
    }
   )
  }
}
