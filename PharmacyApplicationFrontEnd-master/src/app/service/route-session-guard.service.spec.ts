import { TestBed } from '@angular/core/testing';

import { RouteSessionGuardService } from './route-session-guard.service';

describe('RouteSessionGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteSessionGuardService = TestBed.get(RouteSessionGuardService);
    expect(service).toBeTruthy();
  });
});
