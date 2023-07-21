import { TestBed } from '@angular/core/testing';

import { MenutypedisplayService } from './menutypedisplay.service';

describe('MenutypedisplayService', () => {
  let service: MenutypedisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenutypedisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
