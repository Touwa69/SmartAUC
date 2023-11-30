import { TestBed } from '@angular/core/testing';

import { VendeurService } from './vendeur.service';

describe('VendeurService', () => {
  let service: VendeurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendeurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
