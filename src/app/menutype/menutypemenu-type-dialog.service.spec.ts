import { TestBed } from '@angular/core/testing';

import { MenutypemenuTypeDialogService } from './menutypemenu-type-dialog.service';

describe('MenutypemenuTypeDialogService', () => {
  let service: MenutypemenuTypeDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenutypemenuTypeDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
