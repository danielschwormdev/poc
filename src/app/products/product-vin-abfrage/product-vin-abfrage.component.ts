import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-vin-abfrage',
  templateUrl: './product-vin-abfrage.component.html',
  styleUrls: ['./product-vin-abfrage.component.css'],
})
export class ProductVinAbfrageComponent implements OnInit {
  @Input() vinAbfrageDetails = {
    companyData: {
      headquarter: '',
      hrNumber: '',
      taxNumber: '',
    },
    servicePartner: {
      partnerName: '',
      partnerNumber: '',
    },
  };

  constructor() {}

  ngOnInit(): void {}

  public setVinAbfrageDetails(data: any, key: any) {
    localStorage.setItem(key, data);
  }
}
