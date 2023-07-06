import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginViaPhoneVerificationComponent } from './login-via-phone-verification.component';

describe('LoginViaPhoneVerificationComponent', () => {
  let component: LoginViaPhoneVerificationComponent;
  let fixture: ComponentFixture<LoginViaPhoneVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginViaPhoneVerificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginViaPhoneVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
