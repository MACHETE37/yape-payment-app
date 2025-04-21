import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from '../../Services/payment.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './payment-method.component.html'
})
export class PaymentMethodComponent {
selectMethod(arg0: string) {
throw new Error('Method not implemented.');
}
  selectedMethod: string = 'yape'; // Ya que solo usaremos Yape
  razonSocial: string = '';
  direccion: string = '';
  amount: number = 0;
  phoneNumber: string = '';
  approvalCode: string = '';
  showCodeInput: boolean = false;

  constructor(private router: Router, private paymentService: PaymentService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { 
      amount: number, 
      razonSocial: string, 
      direccion: string 
    };
    
    this.amount = state?.amount || 0;
    this.razonSocial = state?.razonSocial || '';
    this.direccion = state?.direccion || '';
  }

  processPayment() {
    if (this.selectedMethod === 'yape' && this.phoneNumber && this.approvalCode) {
      this.paymentService.setPaymentDetails({
        razonSocial: this.razonSocial,
        direccion: this.direccion,
        amount: this.amount,
        phoneNumber: this.phoneNumber,
        orderNumber: 'ABC' + Math.floor(1000 + Math.random() * 9000)
      });
      this.router.navigate(['/confirmation']);
    }
  }

  toggleCodeInput() {
    this.showCodeInput = !this.showCodeInput;
  }
}