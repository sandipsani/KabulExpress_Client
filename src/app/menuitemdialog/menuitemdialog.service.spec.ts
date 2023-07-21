import { TestBed } from '@angular/core/testing';

import { MenuitemdialogService } from './menuitemdialog.service';

describe('MenuitemdialogService', () => {
  let service: MenuitemdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuitemdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
