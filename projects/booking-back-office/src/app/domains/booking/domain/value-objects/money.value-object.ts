
export class Money {
  private readonly amount: number;
  private readonly currency: string;

  constructor(amount: number, currency: string = "USD") {
    if (isNaN(amount) || amount < 0) {
      throw new Error("El monto debe ser un número positivo");
    }
    if (!currency || currency.trim() === "") {
      throw new Error("La moneda no puede estar vacía");
    }
    this.amount = amount;
    this.currency = currency;
  }

  getAmount(): number {
    return this.amount;
  }

  getCurrency(): string {
    return this.currency;
  }

  toString(): string {
    return `${this.amount} ${this.currency}`;
  }
}
