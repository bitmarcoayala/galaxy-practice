import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardPresenterComponent } from './product-card-presenter.component';

describe('ProductCardPresenterComponent', () => {
  let component: ProductCardPresenterComponent;
  let fixture: ComponentFixture<ProductCardPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCardPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCardPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
