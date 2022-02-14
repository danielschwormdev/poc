import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-silver-dat-calculate-pro',
  templateUrl: './product-silver-dat-calculate-pro.component.html',
  styleUrls: ['./product-silver-dat-calculate-pro.component.css'],
})
export class ProductSilverDatCalculateProComponent implements OnInit {
  @Input() silverDATCalculateProDetails = {
    licenceUser: {
      title: '',
      place: '',
      phone: null,
    },
    contactPartner: {
      firstName: '',
      lastName: '',
      email: '',
    },
    administrator: {
      firstName: '',
      lastName: '',
      email: '',
    },
  };
  constructor() {}

  ngOnInit(): void {}

  public setSilverDATCalculateProDetails(data: any, key: any) {
    localStorage.setItem(key, data);
  }
}
