import { inject, Injectable } from '@angular/core';
import { BookingDto } from '../dto/booking.dto';
import { BookingId } from '../../domain/value-objects/booking-id.value-object';


@Injectable({ providedIn: 'root' })
export class CreateBookingUseCase {

  private readonly repository= inject(BookingRepository);

  async execute(dto: BookingDto): Promise<void> {
    const booking = new Booking(
      new BookingId(0),
      //new BookingTitle(dto.title),
      //new BookingPrice(dto.price),
    );

    await this.repository.create(product);
  }
}