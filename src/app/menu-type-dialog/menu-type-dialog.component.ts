import { Component, OnInit, Inject, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { menutype } from 'src/Model/menutype';
import { MenutypeService } from './menutype.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-menu-type-dialog',
  templateUrl: './menu-type-dialog.component.html',
  styleUrls: ['./menu-type-dialog.component.scss']
})
export class MenuTypeDialogComponent implements OnInit {
  receivedData: any;
  model: menutype = new menutype();
  headingTitle: string = '';

  @Output() clearFormValues: EventEmitter<void> = new EventEmitter<void>();

  menuTypeform = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    title: new FormControl(),
    file: new FormControl(),
    description: new FormControl(),
    fileSource: new FormControl(),
    editimage: new FormControl()
  });

  constructor(
    private menutypeservice: MenutypeService,
    private dialogRef: MatDialogRef<MenuTypeDialogComponent>,
   
    @Inject(MAT_DIALOG_DATA) public data: { title: any, description: any, id: any, image: any, type: any, typeName: any, headingTitle: any }
  ) {
    this.headingTitle = data.headingTitle;
  }

  ngOnInit(): void {
    this.menuTypeform.patchValue({
      id: this.data.id,
      description: this.data.description,
      title: this.data.title,
      name: this.data.typeName,
      editimage: this.data.image,
      fileSource: this.data.image
    });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
  }

  get f() {
    return this.menuTypeform.controls;
  }

  submit() {
    debugger

    //Add Case Menu Type
    if (this.menuTypeform.value.id==null) 
    {
      debugger
      const formData = new FormData();
      formData.append('TypeName', this.menuTypeform.value.name);
      formData.append('TypeImgUrl', this.menuTypeform.value.fileSource);
      formData.append('title', this.menuTypeform.value.title);
      formData.append('description', this.menuTypeform.value.description);

      this.menutypeservice.addmenu(formData).subscribe(
        (response: any) => {
          console.log(response);
          Swal.fire('Congrats', response.typeName + ' category has been created', 'success');
          this.dialogRef.close();
        },
        (error: any) => {
          console.log(error);
        }
      );
    } 

    //Edit Case Menu Type
    else{        
      if (this.menuTypeform.value.id!=null) {
        const formData = new FormData();
        formData.append('TypeName', this.menuTypeform.value.name);
        formData.append('title', this.menuTypeform.value.title);
        formData.append('description', this.menuTypeform.value.description);
        formData.append('TypeImgUrl', this.menuTypeform.value.fileSource);
        formData.append('id', this.menuTypeform.value.id);

        this.menutypeservice.EditMenuType(formData).subscribe(
          (response: any) => {
            console.log(response);
            Swal.fire('Congrats', 'Menu Type Updated Successfully', 'success');
            this.dialogRef.close();
          },
          (error: any) => {
            Swal.fire('Warning','Error While Deleting')
            console.log(error);
          }
        );
      }
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.menuTypeform.patchValue({
        fileSource: file
      });
    }
  }

  // editsubmit() {
  //   debugger
  //   if (this.menuTypeform.valid) {
  //     const formData = new FormData();
  //     formData.append('TypeName', this.menuTypeform.value.name);
  //     formData.append('title', this.menuTypeform.value.title);
  //     formData.append('description', this.menuTypeform.value.description);
  //     formData.append('id', this.menuTypeform.value.id);

  //     this.menutypeservice.EditMenuType(formData).subscribe(
  //       (response: any) => {
  //         console.log(response);
  //         Swal.fire('Congrats', response.typeName + ' category has been created', 'success');
  //         this.dialogRef.close();
  //       },
  //       (error: any) => {
  //         console.log(error);
  //       }
  //     );
  //   }
  // }

  onClose() {
    this.clearFormValues.emit();
    this.dialogRef.close();
  }
}
