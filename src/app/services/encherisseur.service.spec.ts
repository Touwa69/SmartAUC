import { TestBed } from '@angular/core/testing';

import { EncherisseurService } from './encherisseur.service';

describe('EncherisseurService', () => {
  let service: EncherisseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncherisseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
