export class CreatedAt {

  private readonly value: Date;

  constructor(date: string | Date) {
    const parsed = typeof date === 'string' ? new Date(date) : date;

    if (isNaN(parsed.getTime())) {
      throw new Error("Fecha de creación inválida.");
    }

    this.value = parsed;
  }

  public getValue(): Date {
    return this.value;
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public toJSON(): string {
    return this.toISOString();
  }
}
