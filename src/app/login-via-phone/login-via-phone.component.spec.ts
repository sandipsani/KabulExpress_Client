import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViaPhoneComponent } from './login-via-phone.component';

describe('LoginViaPhoneComponent', () => {
  let component: LoginViaPhoneComponent;
  let fixture: ComponentFixture<LoginViaPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginViaPhoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginViaPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
