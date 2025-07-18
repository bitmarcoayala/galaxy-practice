export class ProductId {

  private readonly value: number;

  constructor(value: number) {
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error("El ID debe ser un número entero positivo.");
    }
    this.value = value;
  }

  public getValue(): number {
    return this.value;
  }

  public equals(other: ProductId): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value.toString();
  }

  public toJSON(): number {
    return this.value;
  }
}
