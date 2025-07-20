// user-id.value-object.ts

export class UserId {
  private readonly value: string;

  constructor(value: string) {
    if (!value || value.trim() === "") {
      throw new Error("UserId no puede estar vacío");
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  toString(): string {
    return this.value;
  }
}
