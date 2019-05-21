import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/items-list.model';

@Component({
  selector: 'app-cart-mini',
  templateUrl: './cart-mini.component.html',
  styleUrls: ['./cart-mini.component.css'],
})
export class CartMiniComponent implements OnInit {
  items = new Array<Item>();
  constructor() {
    this.items.push(new Item('Product Name', 'A Brief Description', 12, true, 2));
    this.items.push(new Item('Second product', 'more description', 9, true, 1));
    this.items.push(new Item('Third product', 'more description', 5, true, 4));
  }

  get total() {
    return this.items.reduce((accu, e) => (accu += e.price * e.quantity), 0);
  }

  itemTotal(index) {
    return this.items[index].price * this.items[index].quantity;
  }

  quantityChange(event, index) {
    const {
      target: { value },
    } = event;
    this.items[index].quantity = parseInt(value);
  }

  removeItem(index) {
    this.items = this.items.filter((_e, i) => i !== index);
  }

  ngOnInit() {}
}
