import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PaymentMethodComponent } from './app/YapeApp/payment-method/payment-method.component';
import { PaymentConfirmationComponent } from './app/YapeApp/payment-confirmation/payment-confirmation.component';
import { SearchUserComponent } from './app/YapeApp/search-user/search-user.component';
import { LoginComponent } from './app/login/login.component';
import { PaymentMethodSelectorComponent } from './app/YapeApp/payment-method-selector/payment-method-selector.component';
import { CreditCardPaymentComponent } from './app/YapeApp/credit-card-payment/credit-card-payment.component';
import { DniRucRegisterComponent } from './app/dni-ruc-register/dni-ruc-register.component';

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([
        { path: '', component: LoginComponent },
        { path: 'search-user', component: SearchUserComponent },
        { path: 'payment', component: PaymentMethodComponent },
        { path: 'confirmation', component: PaymentConfirmationComponent },
        { path: 'select-method', component: PaymentMethodSelectorComponent },
        { path: 'credit-card', component: CreditCardPaymentComponent },
        { path: 'yape-plin', component: PaymentMethodComponent }, // Usar componente existente modificado
        { path: 'registrar',component:DniRucRegisterComponent},
        { path: '**', redirectTo: '' }
      ])
    ]
  });