import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BillingFormComponent } from './billing-form/billing-form.component';
import { HowdyComponent } from './howdy/howdy.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, BillingFormComponent, HowdyComponent, FooterComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
