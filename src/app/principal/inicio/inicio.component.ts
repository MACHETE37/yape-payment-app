import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { MobileInfoComponent } from "../components/mobile-info/mobile-info.component";
import { BalanceComponent } from "../components/balance/balance.component";
import { AdditionalServicesComponent } from "../components/additional-services/additional-services.component";
import { FooterComponent } from "../components/footer/footer.component";

@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent, MobileInfoComponent, BalanceComponent, AdditionalServicesComponent, FooterComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
