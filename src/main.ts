import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { PaymentMethodComponent } from './app/YapeApp/payment-method/payment-method.component';
import { PaymentConfirmationComponent } from './app/YapeApp/payment-confirmation/payment-confirmation.component';
import { SearchUserComponent } from './app/YapeApp/search-user/search-user.component';
import { LoginComponent } from './app/login/login.component';

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([
        { path: '', component: LoginComponent },
        { path: 'search-user', component: SearchUserComponent },
        { path: 'payment', component: PaymentMethodComponent },
        { path: 'confirmation', component: PaymentConfirmationComponent },
        { path: '**', redirectTo: '' }
      ])
    ]
  });