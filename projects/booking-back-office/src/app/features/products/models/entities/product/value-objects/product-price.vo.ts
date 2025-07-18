export class ProductPrice {

  private readonly value: number;

  constructor(value: number) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error("El precio debe ser un número.");
    }

    if (value <= 0) {
      throw new Error("El precio debe ser mayor que cero.");
    }

    if (value > 1_000_000) {
      throw new Error("El precio excede el máximo permitido.");
    }

    this.value = parseFloat(value.toFixed(2)); // Redondeo a 2 decimales
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: ProductPrice): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return `$${this.value.toFixed(2)}`;
  }

  public toJSON(): number {
    return this.value;
  }
}
