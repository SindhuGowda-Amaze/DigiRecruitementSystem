import { TestBed } from '@angular/core/testing';

import { DigiRecruitmentServiceService } from './digi-recruitment-service.service';

describe('DigiRecruitmentServiceService', () => {
  let service: DigiRecruitmentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigiRecruitmentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
