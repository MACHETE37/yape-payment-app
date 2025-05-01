import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-credit-card-payment',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './credit-card-payment.component.html'
})
export class CreditCardPaymentComponent {
  cardNumber: string = '';
  cardHolder: string = '';
  expiryDate: string = '';
  cvv: string = '';

  constructor(private router: Router) {}

  formatCardNumber() {
    this.cardNumber = this.cardNumber.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
  }

  processPayment() {
    if(this.isValidForm()) {
      this.router.navigate(['/confirmation']);
    }
  }

  isValidForm(): boolean {
    return true
  }
}