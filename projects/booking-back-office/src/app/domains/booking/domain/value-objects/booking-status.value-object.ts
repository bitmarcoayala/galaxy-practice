// booking-status.value-object.ts

export enum BookingStatusEnum {
  Pending = "Pending",
  Confirmed = "Confirmed",
  Cancelled = "Cancelled",
  Completed = "Completed"
}

export class BookingStatus {
  private readonly value: BookingStatusEnum;
    static PENDING: BookingStatus;
    static CONFIRMED: BookingStatus;
    static CANCELLED: BookingStatus;
    static COMPLETED: BookingStatus;

  constructor(value: BookingStatusEnum | string) {
    if (!value || !(Object.values(BookingStatusEnum) as string[]).includes(value)) {
      throw new Error("BookingStatus inválido");
    }
    this.value = value as BookingStatusEnum;
  }

  getValue(): BookingStatusEnum {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
