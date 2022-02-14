import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-my-dat',
  templateUrl: './product-my-dat.component.html',
  styleUrls: ['./product-my-dat.component.css'],
})
export class ProductMyDatComponent implements OnInit {
  @Input() myDATDetails = {
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

  ngOnInit(): void {}

  public setMyDATDetails(data: any, key: any) {
    localStorage.setItem(key, data);
  }
}
