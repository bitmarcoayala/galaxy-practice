export interface CreateBookingHttpDto {
  userId: number;
  serviceId: number;
  dateTime: string;
  status: string;
  totalAmount: number;
}
