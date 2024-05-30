import { TestBed } from '@angular/core/testing';

import { Televisor } from './Televisor.service';

describe('PropiedadesService', () => {
  let service: Televisor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Televisor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});