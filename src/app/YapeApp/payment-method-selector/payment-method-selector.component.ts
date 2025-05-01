import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-method-selector',
  standalone: true,
  templateUrl: './payment-method-selector.component.html'
})
export class PaymentMethodSelectorComponent {
  selectedMethod: string = '';

  constructor(private router: Router) {}

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  continueToPayment() {
    if(this.selectedMethod) {
      const route = this.selectedMethod === 'credit-card' ? '/credit-card' : '/yape-plin';
      this.router.navigate([route]);
    }
  }
}