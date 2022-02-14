import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartAutoglasPlusComponent } from './product-in-cart-autoglas-plus.component';

describe('ProductInCartAutoglasPlusComponent', () => {
  let component: ProductInCartAutoglasPlusComponent;
  let fixture: ComponentFixture<ProductInCartAutoglasPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartAutoglasPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInCartAutoglasPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
