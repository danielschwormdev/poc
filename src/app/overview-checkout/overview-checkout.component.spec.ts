import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewCheckoutComponent } from './overview-checkout.component';

describe('OverviewCheckoutComponent', () => {
  let component: OverviewCheckoutComponent;
  let fixture: ComponentFixture<OverviewCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewCheckoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
