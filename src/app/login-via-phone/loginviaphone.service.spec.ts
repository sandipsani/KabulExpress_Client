import { TestBed } from '@angular/core/testing';

import { LoginviaphoneService } from './loginviaphone.service';

describe('LoginviaphoneService', () => {
  let service: LoginviaphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginviaphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
