import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsPresenterComponent } from './product-details.presenter.component';

describe('ProductDetailsPresenterComponent', () => {
  let component: ProductDetailsPresenterComponent;
  let fixture: ComponentFixture<ProductDetailsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductDetailsPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
