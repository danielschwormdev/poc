import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartMyDatComponent } from './product-in-cart-my-dat.component';

describe('ProductInCartMyDatComponent', () => {
  let component: ProductInCartMyDatComponent;
  let fixture: ComponentFixture<ProductInCartMyDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartMyDatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInCartMyDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
