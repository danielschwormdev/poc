import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-autoglas-plus',
  templateUrl: './product-autoglas-plus.component.html',
  styleUrls: ['./product-autoglas-plus.component.css'],
})
export class ProductAutoglasPlusComponent implements OnInit {
  @Input() autoglasPlusDetails = {
    innung: '',
  };

  constructor() {}

  ngOnInit(): void {}

  public getInnung() {
    console.log(this.autoglasPlusDetails.innung);
    return this.autoglasPlusDetails.innung;
  }

  public setInnung(innung: any) {
    localStorage.setItem('innung', innung);
  }
}
