import { TestBed } from '@angular/core/testing';

import { SavedService } from './saved.service';

describe('SavedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavedService = TestBed.get(SavedService);
    expect(service).toBeTruthy();
  });
});
