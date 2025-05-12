import { Component, signal } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';

@Component({
  selector: 'app-additional-services',
  imports: [],
  templateUrl: './additional-services.component.html',
  styleUrl: './additional-services.component.css'
})
export class AdditionalServicesComponent {
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