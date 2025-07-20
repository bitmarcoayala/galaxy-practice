import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BookingService {

    private readonly getProductsUseCase= inject(GetProductsUseCase)
    private readonly filterProductsUseCase= inject(FilterProductsUseCase)
    private readonly createProduct= inject(CreateProductUseCase)

  fetchAll() {
    return this.getProductsUseCase.execute();
  }

  filterTotalAndPaginated(productFilterDto:ProductFilterDto) {
    return this.filterProductsUseCase.execute(productFilterDto);
  }


  saveNewProduct(dto: CreateProductDto) {
    return this.createProduct.execute(dto);
  }
}