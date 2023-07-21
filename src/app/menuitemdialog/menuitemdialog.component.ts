import { Component ,Inject,OnInit} from '@angular/core';
import { MenutypeService } from '../menu-type-dialog/menutype.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenutypemenuTypeDialogService } from '../menutype/menutypemenu-type-dialog.service';
import { MenuitemdialogService } from './menuitemdialog.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-menuitemdialog',
  templateUrl: './menuitemdialog.component.html',
  styleUrls: ['./menuitemdialog.component.scss']
})
export class MenuitemdialogComponent implements OnInit {
  menuTypes: any[] = [];
  headingTitle: string = '';

  constructor(private menutypeservice: MenutypemenuTypeDialogService, private menuitemdialogservice: MenuitemdialogService, private dialogRef: MatDialogRef<MenuitemdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: any, description: any, id: any, image: any, typeid: any, typeName: any, headingTitle: any,price:any })
  {
    this.headingTitle = data.headingTitle;
  }
  menuItemform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    file: new FormControl(),
    description: new FormControl(),
    fileSource: new FormControl(),
    menutype:new FormControl()
    
  });
ngOnInit(): void 
{
  this.getAllMenuTypes();
  this.menuItemform.patchValue({
    id: this.data.id,
    description: this.data.description,
    price: this.data.price,
    name: this.data.typeName,
    menutype: this.data.typeid,

  });
}
  getAllMenuTypes() {
    this.menutypeservice.GetMenuTypes().subscribe(
      (response) => {
        debugger
        console.log(response);
        this.menuTypes = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  submit() 
  {
    debugger
    //Add Case Menu Type
  
    if (this.menuItemform.value.id == null) 
    {
      alert("Add case Invoked")
    const formData = new FormData();
    formData.append('MenuItemName', this.menuItemform.value.name);
    formData.append('MenuItemImage', this.menuItemform.value.fileSource);
    formData.append('MenuItemPrice', this.menuItemform.value.price);
    formData.append('MenuItemDiscription', this.menuItemform.value.description);
    formData.append('MenuTypeId', this.menuItemform.value.menutype);
     
   this.menuitemdialogservice.addmenuitem(formData).subscribe(
    (response)=>{
      if(response.id!=null)
      {
        Swal.fire('Congrats', response.menuItemName + '  has been created', 'success');
         this.dialogRef.close();
      }
      debugger
      console.log(response);
    },
    (error)=>{
      console.log(error);
    }
   )
  }
  else{
debugger
    const formData = new FormData();
      formData.append('MenuItemName', this.menuItemform.value.name);
      formData.append('MenuItemImage', this.menuItemform.value.fileSource);
      formData.append('MenuItemPrice', this.menuItemform.value.price);
      formData.append('MenuItemDiscription', this.menuItemform.value.description);
      formData.append('MenuTypeId', this.menuItemform.value.menutype);
      formData.append('id', this.menuItemform.value.id);

      this.menuitemdialogservice.updatemenuitem(formData).subscribe(
        (response) => {
          if (response.id != null) {
            Swal.fire('Congrats', response.menuItemName + '  has been Updated', 'success');
            this.dialogRef.close();
          }
          debugger
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      )
  }

    }
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.menuItemform.patchValue({
        fileSource: file
      });
    }
  }
}
