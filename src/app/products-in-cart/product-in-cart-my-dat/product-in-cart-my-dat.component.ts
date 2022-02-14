import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-in-cart-my-dat',
  templateUrl: './product-in-cart-my-dat.component.html',
  styleUrls: ['./product-in-cart-my-dat.component.css'],
})
export class ProductInCartMyDatComponent implements OnInit {
  public userData = {
    bdvUser: {
      firstName: '',
      lastName: '',
      email: '',
    },
    standardUser: {
      firstName: '',
      lastName: '',
      email: '',
    },
  };

  constructor() {}

  ngOnInit(): void {
    (this.userData.bdvUser.firstName as any) =
      localStorage.getItem('bdvUser.firstName');
    (this.userData.bdvUser.lastName as any) =
      localStorage.getItem('bdvUser.lastName');
    (this.userData.bdvUser.email as any) =
      localStorage.getItem('bdvUser.email');
    (this.userData.standardUser.firstName as any) = localStorage.getItem(
      'standardUser.firstName'
    );
    (this.userData.standardUser.lastName as any) = localStorage.getItem(
      'standardUser.lastName'
    );
    (this.userData.standardUser.email as any) =
      localStorage.getItem('standardUser.email');
  }
}
