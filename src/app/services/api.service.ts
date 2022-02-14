import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';
import { token } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://api.emporix.io';
  public cache = '';
  public numberCache = 0;
  public token: token = {
    refresh_token: '',
    refresh_token_expires_in: 0,
    session_idle_time: 0,
    token_type: '',
    access_token: '',
    expires_in: 0,
    scope: '',
  };

  public authCredentials = {
    client_id: 'hKWtFs3tgltFiGn0EyBOH5o97waVjj3e',
    client_secret: 'XrA5AWkRFMDPG0PX',
    grant_type: 'client_credentials',
  };

  private httpOptions = {
    headers: new HttpHeaders({
      'hybris-session-id': '65846',
      'Content-Type': 'application/json',
    }),
  };

  private httpOption2 = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

  constructor(private http: HttpClient) {}

  public getTokenFunction() {
    this.getToken().subscribe((data: token) => {
      this.token = data;
      this.httpOptions.headers = this.httpOptions.headers.append(
        'Authorization',
        `Bearer ${this.token.access_token}`
      );
    });
  }

  public getBearer() {
    this.getTokenFunction();
    return this.token.access_token;
  }

  public getToken(): Observable<token> {
    console.log(this.authCredentials);
    return this.http
      .post<token>(
        this.baseUrl + '/oauth/token',
        new URLSearchParams(this.authCredentials),
        this.httpOption2
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  public createCustomer(customer: {
    email: string;
    password: string;
    customerDetails: {
      firstName: string;
      company: string;
      contactPhone: string;
      contactEmail: string;
    };
    customerAddress: {
      contactName: string;
      companyName: string;
      street: string;
      streetNumber: string;
      zipCode: string;
      city: string;
    };
  }): Observable<Customer> {
    this.cache = customer.customerDetails.contactEmail;
    return this.http
      .post<Customer>(
        this.baseUrl + '/customer/testtenant/signup',
        JSON.stringify(customer),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  public getCustomer(): Observable<Customer> {
    if (this.cache != '') {
      return this.http
        .get<Customer>(
          this.baseUrl +
            `/customer/testtenant/customers?q=contactEmail:"${this.cache}"&expand=addresses`,
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    } else {
      return this.http
        .get<Customer>(
          this.baseUrl +
            `/customer/testtenant/customers?q=id:${this.numberCache}&expand=addresses`,
          this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
    }
  }

  public getCustomerById(customerID: number): Observable<Customer> {
    this.numberCache = customerID;
    return this.http
      .get<Customer>(
        this.baseUrl +
          `/customer/testtenant/customers?q=id:"${Number}"&expand=addresses`,
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  private handleError(error: {
    error: { message: string };
    status: any;
    message: any;
  }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
