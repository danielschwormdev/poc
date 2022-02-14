import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferIndividualComponent } from './offer-individual.component';

describe('OfferIndividualComponent', () => {
  let component: OfferIndividualComponent;
  let fixture: ComponentFixture<OfferIndividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferIndividualComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
