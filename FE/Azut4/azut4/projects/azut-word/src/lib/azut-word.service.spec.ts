import { TestBed } from '@angular/core/testing';

import { AzutWordService } from './azut-word.service';

describe('AzutWordService', () => {
  let service: AzutWordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AzutWordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
