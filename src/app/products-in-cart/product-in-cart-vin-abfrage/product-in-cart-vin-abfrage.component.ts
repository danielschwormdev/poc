import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-in-cart-vin-abfrage',
  templateUrl: './product-in-cart-vin-abfrage.component.html',
  styleUrls: ['./product-in-cart-vin-abfrage.component.css'],
})
export class ProductInCartVinAbfrageComponent implements OnInit {
  public vinAbfrageData = {
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

  ngOnInit(): void {
    // companyData
    (this.vinAbfrageData.companyData.headquarter as any) = localStorage.getItem(
      'companyData.headquarter'
    );
    (this.vinAbfrageData.companyData.hrNumber as any) = localStorage.getItem(
      'companyData.hrNumber'
    );
    (this.vinAbfrageData.companyData.taxNumber as any) = localStorage.getItem(
      'companyData.taxNumber'
    );

    // servicePartner
    (this.vinAbfrageData.servicePartner.partnerName as any) =
      localStorage.getItem('servicePartner.partnerName');
    (this.vinAbfrageData.servicePartner.partnerNumber as any) =
      localStorage.getItem('servicePartner.partnerNumber');
  }
}
