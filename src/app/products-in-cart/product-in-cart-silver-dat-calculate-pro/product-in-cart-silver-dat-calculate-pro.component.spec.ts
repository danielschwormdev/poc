import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartSilverDatCalculateProComponent } from './product-in-cart-silver-dat-calculate-pro.component';

describe('ProductInCartSilverDatCalculateProComponent', () => {
  let component: ProductInCartSilverDatCalculateProComponent;
  let fixture: ComponentFixture<ProductInCartSilverDatCalculateProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartSilverDatCalculateProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInCartSilverDatCalculateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
