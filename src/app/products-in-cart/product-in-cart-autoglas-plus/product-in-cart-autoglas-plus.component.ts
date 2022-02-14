import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-in-cart-autoglas-plus',
  templateUrl: './product-in-cart-autoglas-plus.component.html',
  styleUrls: ['./product-in-cart-autoglas-plus.component.css'],
})
export class ProductInCartAutoglasPlusComponent implements OnInit {
  constructor() {}

  public innung = '';

  ngOnInit(): void {
    ((this.innung as any) = localStorage.getItem('innung')),
      console.log(this.innung);
  }
}
