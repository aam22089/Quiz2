import { TestBed } from '@angular/core/testing';

import { RndmjokeService } from './rndmjoke.service';

describe('RndmjokeService', () => {
  let service: RndmjokeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RndmjokeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
