import { TestBed } from '@angular/core/testing';

import { CvcardService } from './cvcard.service';

describe('CvcardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvcardService = TestBed.get(CvcardService);
    expect(service).toBeTruthy();
  });
});
