import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuItemUserComponent } from './menu-item-user.component';

describe('MenuItemUserComponent', () => {
  let component: MenuItemUserComponent;
  let fixture: ComponentFixture<MenuItemUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuItemUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuItemUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
