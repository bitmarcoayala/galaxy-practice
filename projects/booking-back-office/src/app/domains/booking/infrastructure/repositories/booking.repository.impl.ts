/*import { Injectable } from "@angular/core";
import { BookingRepository } from "../../domain/repositories/booking.repository";
import { Booking } from "../../domain/entities/booking.entity";
import { BookingId } from "../../domain/value-objects/booking-id.value-object";
import { UserId } from "../../domain/value-objects/user-id.value-object";

// booking.repository.impl.ts
@Injectable()
export class BookingRepositoryImpl implements BookingRepository {
  constructor(private http: HttpClient) {}
    findByUserId(userId: UserId): Promise<Booking[]> {
        throw new Error("Method not implemented.");
    }
    delete(id: BookingId): Promise<void> {
        throw new Error("Method not implemented.");
    }

  async save(booking: Booking): Promise<void> {
    const dto = BookingMapper.toDto(booking);
    await this.http.post('/api/bookings', dto).toPromise();
  }

  async findById(id: BookingId): Promise<Booking | null> {
    try {
      const response = await this.http.get<BookingDto>(`/api/bookings/${id.getValue()}`).toPromise();
      return BookingMapper.toDomain(response);
    } catch {
      return null;
    }
  }
}*/