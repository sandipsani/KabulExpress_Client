import { TestBed } from '@angular/core/testing';

import { LoginviaphoneverificationService } from './loginviaphoneverification.service';

describe('LoginviaphoneverificationService', () => {
  let service: LoginviaphoneverificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginviaphoneverificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
