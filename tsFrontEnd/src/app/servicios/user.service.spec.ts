import { TestBed } from '@angular/core/testing';

import { ServiceCrudService } from '../service-crud.service';

describe('ServiceCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceCrudService = TestBed.get(ServiceCrudService);
    expect(service).toBeTruthy();
  });
});
