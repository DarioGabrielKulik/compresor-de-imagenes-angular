import { TestBed } from '@angular/core/testing';

import { CompresorServicesService } from './compresor-services.service';

describe('CompresorServicesService', () => {
  let service: CompresorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompresorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
