import { Component, OnInit, ViewChild } from '@angular/core';
import { CartMiniComponent } from './cart-mini/cart-mini.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css'],
})
export class CheckoutPageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  @ViewChild(CartMiniComponent) cart: CartMiniComponent;
  receiveCallback($event) {
    this.router.navigate(['/success'], {
      state: { user: $event, cart: this.cart.items },
    });
  }
}
