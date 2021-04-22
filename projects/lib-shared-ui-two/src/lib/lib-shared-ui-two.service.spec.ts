import { TestBed } from '@angular/core/testing';

import { LibSharedUiTwoService } from './lib-shared-ui-two.service';

describe('LibSharedUiTwoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibSharedUiTwoService = TestBed.get(LibSharedUiTwoService);
    expect(service).toBeTruthy();
  });
});
