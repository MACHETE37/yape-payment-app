import { Component, signal } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';

@Component({
  selector: 'app-mobile-info',
  imports: [],
  templateUrl: './mobile-info.component.html',
  styleUrl: './mobile-info.component.css'
})
export class MobileInfoComponent {
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
