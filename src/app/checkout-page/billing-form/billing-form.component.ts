import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-billing-form',
  templateUrl: './billing-form.component.html',
  styleUrls: ['./billing-form.component.css'],
})
export class BillingFormComponent implements OnInit {
  signupForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: [''],
      address1: ['', Validators.required],
      address2: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      city: ['', Validators.required],
      cardName: ['', Validators.required],
      cardNumber: ['', Validators.required],
      cardExpiration: ['', Validators.required],
      cardCVV: ['', Validators.required],
    });
  }

  @Output() messageEvent = new EventEmitter<object>();

  get s() {
    return this.signupForm.controls;
  }

  fillForms() {
    this.signupForm.setValue({
      firstName: 'Jesse',
      lastName: 'Webb',
      userName: 'Kayle7777',
      email: 'jessewebb2@gmail.com',
      address1: '14807 Bescott Drive',
      address2: '',
      country: 'United States',
      state: 'Texas',
      zip: '78728',
      city: 'austin',
      cardName: 'Me',
      cardNumber: '5555555555554444',
      cardExpiration: '1024',
      cardCVV: '123',
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signupForm.valid) this.messageEvent.emit(this.signupForm.value);
  }
}
