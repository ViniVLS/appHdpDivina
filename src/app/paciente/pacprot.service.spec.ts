import { TestBed } from '@angular/core/testing';

import { PacprotService } from './pacprot.service';

describe('PacprotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PacprotService = TestBed.get(PacprotService);
    expect(service).toBeTruthy();
  });
});
