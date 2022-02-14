import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAutoglasPlusComponent } from './product-autoglas-plus.component';

describe('ProductAutoglasPlusComponent', () => {
  let component: ProductAutoglasPlusComponent;
  let fixture: ComponentFixture<ProductAutoglasPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAutoglasPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAutoglasPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
