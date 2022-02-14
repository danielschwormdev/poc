import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-in-cart-silver-dat-calculate-pro',
  templateUrl: './product-in-cart-silver-dat-calculate-pro.component.html',
  styleUrls: ['./product-in-cart-silver-dat-calculate-pro.component.css'],
})
export class ProductInCartSilverDatCalculateProComponent implements OnInit {
  public silverDATCalculateProData = {
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

  ngOnInit(): void {
    // Licence User
    (this.silverDATCalculateProData.licenceUser.title as any) =
      localStorage.getItem('licenceUser.title');
    (this.silverDATCalculateProData.licenceUser.place as any) =
      localStorage.getItem('licenceUser.place');
    (this.silverDATCalculateProData.licenceUser.phone as any) =
      localStorage.getItem('licenceUser.phone');

    // contactPartner
    (this.silverDATCalculateProData.contactPartner.firstName as any) =
      localStorage.getItem('contactPartner.firstName');
    (this.silverDATCalculateProData.contactPartner.lastName as any) =
      localStorage.getItem('contactPartner.lastName');
    (this.silverDATCalculateProData.contactPartner.email as any) =
      localStorage.getItem('contactPartner.email');

    // Administrator
    (this.silverDATCalculateProData.administrator.firstName as any) =
      localStorage.getItem('administrator.firstName');
    (this.silverDATCalculateProData.administrator.lastName as any) =
      localStorage.getItem('administrator.lastName');
    (this.silverDATCalculateProData.administrator.email as any) =
      localStorage.getItem('administrator.email');
  }
}
