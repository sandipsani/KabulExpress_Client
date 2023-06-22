import { TestBed } from '@angular/core/testing';

import { CanactivategaurdService } from './canactivategaurd.service';

describe('CanactivategaurdService', () => {
  let service: CanactivategaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanactivategaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
