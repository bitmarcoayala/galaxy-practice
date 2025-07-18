import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingLibraryComponent } from './booking-library.component';

describe('BookingLibraryComponent', () => {
  let component: BookingLibraryComponent;
  let fixture: ComponentFixture<BookingLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingLibraryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
