import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTypeDialogComponent } from './menu-type-dialog.component';

describe('MenuTypeDialogComponent', () => {
  let component: MenuTypeDialogComponent;
  let fixture: ComponentFixture<MenuTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTypeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
