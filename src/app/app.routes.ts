import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SearchUserComponent } from './YapeApp/search-user/search-user.component';
import { PaymentMethodComponent } from './YapeApp/payment-method/payment-method.component';
import { PaymentConfirmationComponent } from './YapeApp/payment-confirmation/payment-confirmation.component';
import { PaymentMethodSelectorComponent } from './YapeApp/payment-method-selector/payment-method-selector.component';
import { CreditCardPaymentComponent } from './YapeApp/credit-card-payment/credit-card-payment.component';
import { DniRucRegisterComponent } from './dni-ruc-register/dni-ruc-register.component';
export const routes: Route[] = [
    { path: '', component: LoginComponent },
    { path: 'search-user', component: SearchUserComponent },
    { path: 'payment', component: PaymentMethodComponent },
    { path: 'confirmation', component: PaymentConfirmationComponent },
    { path: 'select-method', component: PaymentMethodSelectorComponent },
    { path: 'credit-card', component: CreditCardPaymentComponent },
    { path: 'yape-plin', component: PaymentMethodComponent }, // Usar componente existente modificado
    { path: 'registrar',component:DniRucRegisterComponent},
    { path: '**', redirectTo: '' }
];

//{path: '', loadComponent: () => import('app/modules/admin/ControlInterno/apertura-procesos/apertura-procesos.component')},