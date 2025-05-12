import { Component, signal } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
