import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVinAbfrageComponent } from './product-vin-abfrage.component';

describe('ProductVinAbfrageComponent', () => {
  let component: ProductVinAbfrageComponent;
  let fixture: ComponentFixture<ProductVinAbfrageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductVinAbfrageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductVinAbfrageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
