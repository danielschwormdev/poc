import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-expansion-panel',
  templateUrl: './payment-expansion-panel.component.html',
  styleUrls: ['./payment-expansion-panel.component.css'],
})
export class PaymentExpansionPanelComponent implements OnInit {
  constructor() {}

  public ngOnInit(): void {}
  public step = 0;

  public setStep(index: number) {
    this.step = index;
  }

  public nextStep() {
    this.step++;
  }

  public prevStep() {
    this.step--;
  }
}
