import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListPresenterComponent } from './product-list.presenter.component';

describe('ProductListPresenterComponent', () => {
  let component: ProductListPresenterComponent;
  let fixture: ComponentFixture<ProductListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListPresenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
