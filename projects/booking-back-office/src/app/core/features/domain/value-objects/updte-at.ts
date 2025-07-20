export class UpdatedAt {
  private readonly value: Date;

  constructor(date: string | Date) {
    const parsed = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(parsed.getTime())) {
      throw new Error("Fecha de actualización inválida.");
    }

    this.value = parsed;
  }

  public getValue(): Date {
    return this.value;
  }

  public isAfter(date: Date): boolean {
    return this.value.getTime() > date.getTime();
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public toJSON(): string {
    return this.toISOString();
  }
}
