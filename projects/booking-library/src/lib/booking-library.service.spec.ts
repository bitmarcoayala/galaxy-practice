import { TestBed } from '@angular/core/testing';

import { BookingLibraryService } from './booking-library.service';

describe('BookingLibraryService', () => {
  let service: BookingLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
