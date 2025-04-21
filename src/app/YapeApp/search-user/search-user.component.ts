import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-user',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './search-user.component.html'
})
export class SearchUserComponent {
  userCode: string = '';
  userData: any = null;
  paymentHistory: any[] = [];

  sampleUsers = [
    {
      code: '123456',
      razonSocial: 'EMPRESA COMERCIAL SAC',
      direccion: 'AV. LOS INCAS 123 - LIMA',
      payments: [
        { mes: 'ENE 2023', saldo: 150.00 },
        { mes: 'FEB 2023', saldo: 180.50 },
        { mes: 'MAR 2023', saldo: 210.00 }
      ]
    },
    {
      code: '789012',
      razonSocial: 'NEGOCIOS PERUANOS EIRL',
      direccion: 'JR. UNION 456 - AREQUIPA',
      payments: [
        { mes: 'ENE 2023', saldo: 320.00 },
        { mes: 'FEB 2023', saldo: 295.75 }
      ]
    }
  ];
  router: Router = new Router;

  searchUser() {
    const foundUser = this.sampleUsers.find(user => user.code === this.userCode);
    
    if (foundUser) {
      this.userData = {
        razonSocial: foundUser.razonSocial,
        direccion: foundUser.direccion
      };
      this.paymentHistory = foundUser.payments;
    } else {
      this.userData = null;
      this.paymentHistory = [];
      alert('Usuario no encontrado');
    }
  }

  goToPayment(amount: number) {
    this.router.navigate(['/payment'], { 
      state: { amount: amount } 
    });
  }
}