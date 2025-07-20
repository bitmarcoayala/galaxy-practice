export interface BookingDto {
  id: string;
  userId: string;
  serviceId: string;
  dateTime: string;
  status: string;
  totalAmount: number;
  currency: string;
}

// create-booking.command.ts
export interface CreateBookingCommand {
  bookingId: string;
  userId: string;
  serviceId: string;
  dateTime: string;
  totalAmount: number;
}