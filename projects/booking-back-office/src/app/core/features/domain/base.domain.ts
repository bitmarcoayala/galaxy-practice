import { CreatedAt } from './value-objects/created-at.vo';
import { UpdatedAt } from './value-objects/updte-at';

export abstract class Domain {
  constructor(
    protected readonly createdAt: CreatedAt,
    protected readonly updatedAt: UpdatedAt
  ) {}

  public getCreatedAt(): CreatedAt {
    return this.createdAt;
  }

  public getUpdatedAt(): UpdatedAt {
    return this.updatedAt;
  }

  public toTimestamps(): { createdAt: string; updatedAt: string } {
    return {
      createdAt: this.createdAt.toISOString(),
      updatedAt: this.updatedAt.toISOString()
    };
  }
}
