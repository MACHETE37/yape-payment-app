import { Component } from '@angular/core';
import { HeaderComponent } from "../components/header/header.component";
import { MobileInfoComponent } from "../components/mobile-info/mobile-info.component";
import { BalanceComponent } from "../components/balance/balance.component";
import { FooterComponent } from "../components/footer/footer.component";
import { Cliente } from '../../interfaces/Cliente';
@Component({
  selector: 'app-inicio',
  imports: [HeaderComponent, MobileInfoComponent, BalanceComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  // Aquí puedes agregar la lógica de tu componente
  // Por ejemplo, puedes definir propiedades y métodos que se utilizarán en la plantilla HTML
  // También puedes inyectar servicios si es necesario
  jsonObject: Cliente | null = null;

  constructor() {
    // Constructor del componente
  }

  // Métodos y propiedades del componente
  onInit() {
    
  }

}
