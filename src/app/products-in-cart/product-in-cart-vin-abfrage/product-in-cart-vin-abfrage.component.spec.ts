import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductInCartVinAbfrageComponent } from './product-in-cart-vin-abfrage.component';

describe('ProductInCartVinAbfrageComponent', () => {
  let component: ProductInCartVinAbfrageComponent;
  let fixture: ComponentFixture<ProductInCartVinAbfrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductInCartVinAbfrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductInCartVinAbfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
