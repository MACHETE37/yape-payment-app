import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../Services/payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {
  paymentDetails: any;

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit() {
    this.paymentDetails = this.paymentService.getPaymentDetails();
    if (!this.paymentDetails) {
      this.router.navigate(['/']);
    }
  }

  continueShopping() {
    this.router.navigate(['/search-user']);
  }
}