import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MenuTypeDialogComponent } from '../menu-type-dialog/menu-type-dialog.component';
import { MenutypemenuTypeDialogService } from './menutypemenu-type-dialog.service';

import { Location } from '@angular/common';
import { menutype } from 'src/Model/menutype';
import { MenutypeService } from '../menu-type-dialog/menutype.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-menutype',
  templateUrl: './menutype.component.html',
  styleUrls: ['./menutype.component.scss']
})
export class MenutypeComponent implements OnInit {
  menuTypes: any[] = [];
  menutype: menutype = new menutype();
  filteredMenuTypes: any[] = [];
  searchText: string = '';
  headingTitle: string='';

  constructor(private location :Location, public dialog: MatDialog, private router: Router,private menutypedialogservice: MenutypemenuTypeDialogService,private menutypeservice:MenutypeService) { }

  ngOnInit(): void {
    this.getAllMenuTypes();
  }

  openMenuType() {
    debugger
    if(this.menutype.id==null)
    {
      this.headingTitle = 'Add Menu Type';
      const dialogRef = this.dialog.open(MenuTypeDialogComponent, {
        height: '600px',
        width: '600px',
        data: { headingTitle: this.headingTitle ,id:null }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getAllMenuTypes();
      });
    }
    else{
      debugger
      this.headingTitle = 'Edit Menu Type';
      const dialogRef = this.dialog.open(MenuTypeDialogComponent, {
        height: '600px',
        width: '600px',
        data: { id: this.menutype.id, typeName: this.menutype.name, description: this.menutype.description, title: this.menutype.title, image: this.menutype.imagePath, headingTitle: this.headingTitle }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.getAllMenuTypes();
       this.menutype.id=null;
      });
    }
  
  }
  getAllMenuTypes() {
    this.menutypedialogservice.GetMenuTypes().subscribe(
      (response) => {
        console.log(response);
        this.menuTypes = response;
        this.filteredMenuTypes = this.menuTypes;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  // openMenuTypeEdit() {
  //   const dialogRef = this.dialog.open(MenuTypeDialogComponent, {
  //     height: '600px',
  //     width: '600px',
  //     data: {}
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.getAllMenuTypes();
  //   });
  // }
  filterMenuTypes() {
    if (this.searchText.trim() === '') {
      this.filteredMenuTypes = this.menuTypes;
    } else {
      this.filteredMenuTypes = this.menuTypes.filter((menuType) =>
        menuType.typeName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }
  editMenuType(id: any, index: number)
  {
    debugger
    const menuTypes = this.menuTypes.find(item => item.id === id);
    this.menutype.id=menuTypes.id;
    this.menutype.title=menuTypes.title;
    this.menutype.description=menuTypes.description;
    this.menutype.name = menuTypes.typeName;
    this.menutype.imagePath = menuTypes.typeImgUrl;
    
  this.openMenuType();

  }
  DeleteMenu(id:any)
  {
    this.menutypeservice.DeleteMenuType(id).subscribe(
      (response)=>{
        debugger
        Swal.fire('success',response.response);
        this.getAllMenuTypes();
      },
      (error)=>{
        debugger
        Swal.fire('warning',error.error);
      }
    )
  }
}
