// payment.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private paymentDetails: any;

  setPaymentDetails(details: any) {
    this.paymentDetails = details;
  }

  getPaymentDetails() {
    return this.paymentDetails;
  }

  clearPaymentDetails() {
    this.paymentDetails = null;
  }
}