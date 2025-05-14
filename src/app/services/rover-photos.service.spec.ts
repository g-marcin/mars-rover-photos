import { TestBed } from '@angular/core/testing';

import { RoverPhotosService } from './rover-photos.service';

describe('RoverPhotosService', () => {
  let service: RoverPhotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoverPhotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
