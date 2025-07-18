export class ProductImages {

  private readonly images: string[];

  constructor(images: string[]) {
    if (!Array.isArray(images) || images.length === 0) {
      throw new Error("Se debe proporcionar al menos una imagen.");
    }

    if (images.length > 10) {
      throw new Error("No se pueden agregar más de 10 imágenes.");
    }

    for (const url of images) {
      if (typeof url !== 'string' || url.trim().length === 0) {
        throw new Error("Cada imagen debe ser una URL válida no vacía.");
      }

      if (!this.isValidUrl(url)) {
        throw new Error(`La URL de imagen no es válida: ${url}`);
      }
    }

    // Inmutabilidad defensiva
    this.images = Object.freeze([...images]);
  }

  private isValidUrl(url: string): boolean {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }

  public getValues(): string[] {
    return this.images;
  }

  public equals(other: ProductImages): boolean {
    return JSON.stringify(this.images) === JSON.stringify(other.images);
  }

  public toJSON(): string[] {
    return this.images;
  }

  public toString(): string {
    return this.images.join(", ");
  }
}
