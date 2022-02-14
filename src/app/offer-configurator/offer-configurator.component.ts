import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { getCustomerData } from '../interfaces/getCustomerData';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-offer-configurator',
  templateUrl: './offer-configurator.component.html',
  styleUrls: ['./offer-configurator.component.css'],
})
export class OfferConfiguratorComponent implements OnInit {
  public status = '';
  public organisations: string[] = ['Audi', 'BMW', 'Mercedes-Benz'];
  public getCustomerData: getCustomerData = {
    firstName: '',
    lastName: '',
    contactPhone: 0,
    company: '',
    customerNumber: 0,
    city: '',
    street: '',
    streetNumber: '',
    zipCode: 0,
    id: 0,
    contactEmail: '',
    active: true,
    addresses: [
      {
        street: '',
        streetNumber: '',
        zipCode: 0,
        city: '',
      },
    ],
  };

  constructor(
    private restApi: ApiService,
    private productService: ProductService
  ) {}

  public ngOnInit(): void {
    this.getCustomer();
  }

  public getCustomer() {
    this.restApi.getCustomer().subscribe((data: any) => {
      this.getCustomerData = data['0'] as getCustomerData;
    });
  }

  public setChecked() {
    let numbers = ['I1-input', 'I2-input', 'I3-input', 'I4-input'];
    let checkedItems = [];
    localStorage.clear();
    for (let number of numbers) {
      if (
        document.getElementById(number)?.getAttribute('aria-checked') === 'true'
      ) {
        checkedItems.push(number);
        console.log(true);
      }
    }
    return this.getSetChecked(checkedItems);
  }

  public getSetChecked(checkedItems: string[]) {
    this.productService.setCheckedShared(checkedItems);
  }
}
