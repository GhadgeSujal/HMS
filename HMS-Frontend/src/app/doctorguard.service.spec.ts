import { TestBed } from '@angular/core/testing';

import { DoctorguardService } from './doctorguard.service';

describe('DoctorguardService', () => {
  let service: DoctorguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
