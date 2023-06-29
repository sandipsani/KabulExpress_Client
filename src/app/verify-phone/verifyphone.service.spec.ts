import { TestBed } from '@angular/core/testing';

import { VerifyphoneService } from './verifyphone.service';

describe('VerifyphoneService', () => {
  let service: VerifyphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
