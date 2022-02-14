import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { LoginComponent } from './login/login.component';
import { OfferConfiguratorOverviewComponent } from './offer-configurator-overview/offer-configurator-overview.component';
import { OfferConfiguratorComponent } from './offer-configurator/offer-configurator.component';
import { OfferCreationComponent } from './offer-creation/offer-creation.component';
import { OfferOverviewCustomerComponent } from './offer-overview-customer/offer-overview-customer.component';
import { OfferOverviewComponent } from './offer-overview/offer-overview.component';
import { OfferSuccessfulComponent } from './offer-successful/offer-successful.component';
import { OverviewCheckoutComponent } from './overview-checkout/overview-checkout.component';
import { PaymentSuccessfulComponent } from './payment-successful/payment-successful.component';
import { RegistrationComponent } from './registration/registration.component';
import { StartpageComponent } from './startpage/startpage.component';

const routes: Routes = [
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: 'offer-creation', component: OfferCreationComponent },
  { path: 'offer-configurator', component: OfferConfiguratorComponent },
  {
    path: 'offer-configurator-overview',
    component: OfferConfiguratorOverviewComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'offer-successful', component: OfferSuccessfulComponent },
  { path: 'offer-overview', component: OfferOverviewComponent },
  {
    path: 'offer-overview-customer',
    component: OfferOverviewCustomerComponent,
  },
  {
    path: 'payment-successful',
    component: PaymentSuccessfulComponent,
  },
  {
    path: 'start-page',
    component: StartpageComponent,
  },
  { path: 'overview-checkout', component: OverviewCheckoutComponent },
  { path: '', redirectTo: '/start-page', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
