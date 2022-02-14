import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMyDatComponent } from './product-my-dat.component';

describe('ProductMyDatComponent', () => {
  let component: ProductMyDatComponent;
  let fixture: ComponentFixture<ProductMyDatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductMyDatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductMyDatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
