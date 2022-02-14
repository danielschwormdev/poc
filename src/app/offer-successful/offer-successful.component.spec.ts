import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferSuccessfulComponent } from './offer-successful.component';

describe('OfferSuccessfulComponent', () => {
  let component: OfferSuccessfulComponent;
  let fixture: ComponentFixture<OfferSuccessfulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferSuccessfulComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferSuccessfulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
