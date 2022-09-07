import { TestBed } from '@angular/core/testing';

import { Teoria1aService } from './teoria1a.service';

describe('Teoria1aService', () => {
  let service: Teoria1aService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Teoria1aService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
