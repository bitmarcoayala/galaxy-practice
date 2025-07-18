import { ProductId } from "../product/value-objects/product-id.vo";
import { ProductImages } from "../product/value-objects/product-images.vo";
import { ProductPrice } from "../product/value-objects/product-price.vo";
import { ProductTitle } from "../product/value-objects/product-title.vo";

export class Category {
  constructor(
    private readonly id: ProductId,
    private readonly title: ProductTitle,
    private readonly price: ProductPrice,
    private readonly category: ProductCategory,
    private readonly images: ProductImages
  ) {}

  // Getters
  public getId(): ProductId {
    return this.id;
  }

  public getTitle(): ProductTitle {
    return this.title;
  }

  public getPrice(): ProductPrice {
    return this.price;
  }

  public getCategory(): ProductCategory {
    return this.category;
  }

  public getImages(): ProductImages {
    return this.images;
  }

  // Equality
  public equals(other: Product): boolean {
    return this.id.equals(other.id);
  }

  // Serialization
  public toJSON(): object {
    return {
      id: this.id.toJSON(),
      title: this.title.toJSON(),
      price: this.price.toJSON(),
      category: this.category.toJSON(),
      images: this.images.toJSON()
    };
  }

  public toString(): string {
    return `${this.title.toString()} - ${this.category.toString()} - $${this.price.toString()}`;
  }
}
📁 Estructura de carpetas recomendada
bash
Copiar
Editar
/src
  /domain
    /product
      product.entity.ts
      value-objects/
        product-id.vo.ts
        product-title.vo.ts
        product-price.vo.ts
        product-category.vo.ts
        product-images.vo.ts
