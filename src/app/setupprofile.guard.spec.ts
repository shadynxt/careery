import { TestBed, async, inject } from '@angular/core/testing';

import { SetupprofileGuard } from './setupprofile.guard';

describe('SetupprofileGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SetupprofileGuard]
    });
  });

  it('should ...', inject([SetupprofileGuard], (guard: SetupprofileGuard) => {
    expect(guard).toBeTruthy();
  }));
});
