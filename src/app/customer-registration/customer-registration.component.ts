import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent implements OnInit {
  public durationInSeconds = 5;
  public customers: string[] = ['Interessent', 'Neukunde'];
  public companyName = new FormControl('', [Validators.required]);
  public firstName = new FormControl('', [Validators.required]);
  public lastName = new FormControl('', [Validators.required]);
  public email = new FormControl('', [Validators.required]);
  @Input() customerIdClass = null;
  @Input() customerDetails = {
    email: '',
    password: 'test123',
    customerDetails: {
      firstName: '',
      lastName: '',
      company: '',
      contactPhone: '',
      contactEmail: '',
    },
    customerAddress: {
      contactName: '',
      companyName: '',
      street: '',
      streetNumber: '',
      zipCode: '',
      city: '',
    },
  };

  constructor(
    private restApi: ApiService,
    public router: Router,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.restApi.getTokenFunction();
  }

  public addCustomer() {
    if (
      this.customerDetails.customerDetails.contactEmail != '' &&
      this.customerDetails.customerDetails.firstName != '' &&
      this.customerDetails.customerDetails.lastName != '' &&
      this.customerDetails.customerAddress.companyName != ''
    ) {
      this.restApi.createCustomer(this.customerDetails).subscribe(
        (data: {}) => {
          this.router
            .navigate(['/offer-creation'])
            .then((navigated: boolean) => {
              if (navigated) {
                this.snackBar.openFromComponent(SnackBarComponent, {
                  duration: this.durationInSeconds * 1000,
                });
              }
            });
        },
        (error) => {}
      );
    } else {
      //TODO: Button ausgrauen
    }
  }

  public getCustomerById() {
    if (this.customerIdClass != null) {
      this.restApi.getCustomerById(this.customerIdClass).subscribe(
        (data: any) => {
          this.router.navigate(['/offer-creation']);
        },
        (error) => {}
      );
    } else {
      //TODO: Button ausgrauen
    }
  }

  public getCompanyNameErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Bitte geben Sie einen gültigen Firmenname ein.';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  public getFirstNameErrorMessage() {
    if (this.firstName.hasError('required')) {
      return 'Bitte geben Sie einen gültigen Vorname ein.';
    }
    return this.firstName.hasError('firstName') ? 'Not a valid firstName' : '';
  }

  public getLastNameErrorMessage() {
    if (this.lastName.hasError('required')) {
      return 'Bitte geben Sie einen gültigen Nachnamen ein.';
    }
    return this.lastName.hasError('lastName') ? 'Not a valid lastName' : '';
  }
}
