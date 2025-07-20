import { Booking } from "../entities/booking.entity";
import { BookingId } from "../value-objects/booking-id.value-object";
import { UserId } from "../value-objects/user-id.value-object";

// booking.repository.ts
export interface BookingRepository {
  save(booking: Booking): Promise<void>;
  findById(id: BookingId): Promise<Booking | null>;
  findByUserId(userId: UserId): Promise<Booking[]>;
  delete(id: BookingId): Promise<void>;
}