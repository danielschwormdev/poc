import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-creation',
  templateUrl: './offer-creation.component.html',
  styleUrls: ['./offer-creation.component.css'],
})
export class OfferCreationComponent {
  public offers: string[] = [
    'aus Vorlage erstellen',
    'Individual-Angebot erstellen',
  ];

  constructor() {}
}
