import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutypeDisplayComponent } from './menutype-display.component';

describe('MenutypeDisplayComponent', () => {
  let component: MenutypeDisplayComponent;
  let fixture: ComponentFixture<MenutypeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutypeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutypeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
