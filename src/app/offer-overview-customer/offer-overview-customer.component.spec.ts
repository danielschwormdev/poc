import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferOverviewCustomerComponent } from './offer-overview-customer.component';

describe('OfferOverviewCustomerComponent', () => {
  let component: OfferOverviewCustomerComponent;
  let fixture: ComponentFixture<OfferOverviewCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferOverviewCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferOverviewCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
