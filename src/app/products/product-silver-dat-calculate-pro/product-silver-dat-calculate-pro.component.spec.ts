import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSilverDatCalculateProComponent } from './product-silver-dat-calculate-pro.component';

describe('ProductSilverDatCalculateProComponent', () => {
  let component: ProductSilverDatCalculateProComponent;
  let fixture: ComponentFixture<ProductSilverDatCalculateProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductSilverDatCalculateProComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSilverDatCalculateProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
