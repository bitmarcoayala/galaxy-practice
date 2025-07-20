// date-time.value-object.ts

export class DateTime {
  private readonly value: Date;

  constructor(value: Date | string) {
    if (!value) {
      throw new Error("DateTime no puede estar vacío");
    }
    if (typeof value === "string") {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Formato de fecha inválido para DateTime");
      }
      this.value = date;
    } else {
      this.value = value;
    }
  }

  getValue(): Date {
    return this.value;
  }

  toISOString(): string {
    return this.value.toISOString();
  }

  toString(): string {
    return this.value.toLocaleString();
  }
}
