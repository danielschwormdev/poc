import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { getCustomerData } from '../interfaces/getCustomerData';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-offer-overview',
  templateUrl: './offer-overview.component.html',
  styleUrls: ['./offer-overview.component.css'],
})
export class OfferOverviewComponent implements OnInit {
  public checkedComponents = [''];
  public component1: boolean = false;
  public component2: boolean = false;
  public component3: boolean = false;
  public component4: boolean = false;
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
    private productService: ProductService,
    private restApi: ApiService
  ) {}

  public ngOnInit(): void {
    this.componentsDisplayed();
    this.getCustomer();
  }

  public getCustomer() {
    this.restApi.getCustomer().subscribe((data: any) => {
      this.getCustomerData = data['0'] as getCustomerData;
    });
  }

  public componentsDisplayed() {
    this.checkedComponents = this.productService.getCheckedShared();
    for (let components of this.checkedComponents) {
      switch (components) {
        case 'I1-input': {
          this.component1 = true;
          break;
        }
        case 'I2-input': {
          this.component2 = true;
          break;
        }
        case 'I3-input': {
          this.component3 = true;
          break;
        }
        case 'I4-input': {
          this.component4 = true;
          break;
        }
      }
    }
  }
}
