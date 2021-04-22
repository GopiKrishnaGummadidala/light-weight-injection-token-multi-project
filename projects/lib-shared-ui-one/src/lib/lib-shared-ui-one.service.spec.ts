import { TestBed } from '@angular/core/testing';

import { LibSharedUiOneService } from './lib-shared-ui-one.service';

describe('LibSharedUiOneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibSharedUiOneService = TestBed.get(LibSharedUiOneService);
    expect(service).toBeTruthy();
  });
});
