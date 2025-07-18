import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListSelectedPresenterComponent } from './product-list-selected-presenter.component';

describe('ProductListSelectedPresenterComponent', () => {
  let component: ProductListSelectedPresenterComponent;
  let fixture: ComponentFixture<ProductListSelectedPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListSelectedPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListSelectedPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
