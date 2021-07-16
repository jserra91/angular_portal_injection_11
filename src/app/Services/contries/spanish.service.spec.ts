import { TestBed } from '@angular/core/testing';

import { SpanishService } from './spanish.service';

describe('SpanishService', () => {
  let service: SpanishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpanishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
