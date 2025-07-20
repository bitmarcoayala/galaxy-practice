import { Domain } from "../../../../core/features/domain/base.domain";
import { CreatedAt } from "../../../../core/features/domain/value-objects/created-at.vo";
import { UpdatedAt } from "../../../../core/features/domain/value-objects/updte-at";
import { BookingId } from "../value-objects/booking-id.value-object";
import { BookingStatus } from "../value-objects/booking-status.value-object";
import { DateTime } from "../value-objects/date-time.value-object";
import { Money } from "../value-objects/money.value-object";
import { ServiceId } from "../value-objects/service-id.value-object";
import { UserId } from "../value-objects/user-id.value-object";

export class Booking extends Domain {
  constructor(
    private readonly id: BookingId,
    private readonly userId: UserId,
    private readonly serviceId: ServiceId,
    private readonly dateTime: DateTime,
    private readonly status: BookingStatus,
    private readonly totalAmount: Money,

      protected override readonly createdAt: CreatedAt,
    protected override readonly updatedAt: UpdatedAt,
  ) {
      super(createdAt,
      updatedAt);
  }

  public getId(): BookingId {
    return this.id;
  }

  public getUserId(): UserId {
    return this.userId;
  }

    public getServiceId(): ServiceId {
        return this.serviceId;
    }

    public getDateTime(): DateTime {
        return this.dateTime;
    }

    public getStatus(): BookingStatus {
        return this.status;
    }

    public getTotalAmount(): Money {
        return this.totalAmount;
    }
}