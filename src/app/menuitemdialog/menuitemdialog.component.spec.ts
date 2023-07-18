import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuitemdialogComponent } from './menuitemdialog.component';

describe('MenuitemdialogComponent', () => {
  let component: MenuitemdialogComponent;
  let fixture: ComponentFixture<MenuitemdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuitemdialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuitemdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
