import { Component, signal } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';

@Component({
  selector: 'app-balance',
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {
  // Aquí puedes agregar la lógica de tu componente
  // Por ejemplo, puedes definir propiedades y métodos que se utilizarán en la plantilla HTML
  // También puedes inyectar servicios si es necesario
  jsonObject=signal<Cliente | null>(null);
  constructor() {
        const data = localStorage.getItem('data');
    console.log(data)
    if (data) {
      this.jsonObject.set(JSON.parse(data));
    } 
    // Constructor del componente
  }

  // Métodos y propiedades del componente
  onInit() {

  }
}
