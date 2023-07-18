import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenutypeComponent } from './menutype.component';

describe('MenutypeComponent', () => {
  let component: MenutypeComponent;
  let fixture: ComponentFixture<MenutypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenutypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenutypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
