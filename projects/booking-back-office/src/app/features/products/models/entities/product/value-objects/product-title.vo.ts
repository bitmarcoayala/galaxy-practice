export class ProductTitle {

  private readonly value: string;

  constructor(value: string) {
    const trimmed = value?.trim();

    if (!trimmed || trimmed.length === 0) {
      throw new Error("El título es obligatorio.");
    }

    if (trimmed.length > 100) {
      throw new Error("El título no puede superar los 100 caracteres.");
    }

    this.value = trimmed;
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: ProductTitle): boolean {
    return this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }

  public toJSON(): string {
    return this.value;
  }
}
