import { TestBed } from '@angular/core/testing';

import { MenutypeService } from './menutype.service';

describe('MenutypeService', () => {
  let service: MenutypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenutypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
