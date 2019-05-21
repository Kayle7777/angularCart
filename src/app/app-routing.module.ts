import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { SuccessComponent } from './success-page/success.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'success', component: SuccessComponent },
  { path: '', redirectTo: '/checkout', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
