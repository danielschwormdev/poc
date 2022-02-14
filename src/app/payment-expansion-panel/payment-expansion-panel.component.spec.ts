import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentExpansionPanelComponent } from './payment-expansion-panel.component';

describe('PaymentExpansionPanelComponent', () => {
  let component: PaymentExpansionPanelComponent;
  let fixture: ComponentFixture<PaymentExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
