import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { HeaderComponent } from './shared/header/header.component';
import { OfferCreationComponent } from './offer-creation/offer-creation.component';
import { OfferConfiguratorComponent } from './offer-configurator/offer-configurator.component';
import { FooterComponent } from './shared/footer/footer.component';
import { OfferConfiguratorOverviewComponent } from './offer-configurator-overview/offer-configurator-overview.component';
import { SnackBarComponent } from './customer-registration/snack-bar/snack-bar.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { OfferSuccessfulComponent } from './offer-successful/offer-successful.component';
import { OfferIndividualComponent } from './offer-individual/offer-individual.component';
import { ProductAutoglasPlusComponent } from './products/product-autoglas-plus/product-autoglas-plus.component';
import { ProductMyDatComponent } from './products/product-my-dat/product-my-dat.component';
import { ProductVinAbfrageComponent } from './products/product-vin-abfrage/product-vin-abfrage.component';
import { ProductSilverDatCalculateProComponent } from './products/product-silver-dat-calculate-pro/product-silver-dat-calculate-pro.component';
import { ProductInCartSilverDatCalculateProComponent } from './products-in-cart/product-in-cart-silver-dat-calculate-pro/product-in-cart-silver-dat-calculate-pro.component';
import { ProductInCartVinAbfrageComponent } from './products-in-cart/product-in-cart-vin-abfrage/product-in-cart-vin-abfrage.component';
import { ProductInCartMyDatComponent } from './products-in-cart/product-in-cart-my-dat/product-in-cart-my-dat.component';
import { ProductInCartAutoglasPlusComponent } from './products-in-cart/product-in-cart-autoglas-plus/product-in-cart-autoglas-plus.component';
import { OfferOverviewComponent } from './offer-overview/offer-overview.component';
import { OfferOverviewCustomerComponent } from './offer-overview-customer/offer-overview-customer.component';
import { OverviewCheckoutComponent } from './overview-checkout/overview-checkout.component';
import { PaymentExpansionPanelComponent } from './payment-expansion-panel/payment-expansion-panel.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { StartpageComponent } from './startpage/startpage.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    HeaderComponent,
    OfferCreationComponent,
    OfferConfiguratorComponent,
    FooterComponent,
    OfferConfiguratorOverviewComponent,
    SnackBarComponent,
    LoginComponent,
    RegistrationComponent,
    OfferSuccessfulComponent,
    OfferIndividualComponent,
    ProductAutoglasPlusComponent,
    ProductMyDatComponent,
    ProductVinAbfrageComponent,
    ProductSilverDatCalculateProComponent,
    ProductInCartSilverDatCalculateProComponent,
    ProductInCartVinAbfrageComponent,
    ProductInCartMyDatComponent,
    ProductInCartAutoglasPlusComponent,
    OfferOverviewComponent,
    OfferOverviewCustomerComponent,
    OverviewCheckoutComponent,
    PaymentExpansionPanelComponent,
    StartpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
  providers: [ProductAutoglasPlusComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
