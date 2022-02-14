import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferConfiguratorOverviewComponent } from './offer-configurator-overview.component';

describe('OfferConfiguratorOverviewComponent', () => {
  let component: OfferConfiguratorOverviewComponent;
  let fixture: ComponentFixture<OfferConfiguratorOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfferConfiguratorOverviewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferConfiguratorOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
