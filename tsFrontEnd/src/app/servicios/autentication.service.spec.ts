import { TestBed } from '@angular/core/testing';

import { AuthenticationService } from './autentication.service.service';

describe('AutenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.get(Autentication.ServiceService);
    expect(service).toBeTruthy();
  });
});
