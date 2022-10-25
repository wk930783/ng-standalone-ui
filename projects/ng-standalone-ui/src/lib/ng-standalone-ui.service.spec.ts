import { TestBed } from '@angular/core/testing';

import { NgStandaloneUiService } from './ng-standalone-ui.service';

describe('NgStandaloneUiService', () => {
  let service: NgStandaloneUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgStandaloneUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
