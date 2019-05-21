import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BillingFormComponent } from './checkout-page/billing-form/billing-form.component';
import { HowdyComponent } from './checkout-page/howdy/howdy.component';
import { FooterComponent } from './checkout-page/footer/footer.component';
import { CartMiniComponent } from './checkout-page/cart-mini/cart-mini.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { AppRoutingModule } from './app-routing.module';
import { SuccessComponent } from './success-page/success.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingFormComponent,
    HowdyComponent,
    FooterComponent,
    CartMiniComponent,
    CheckoutPageComponent,
    SuccessComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
