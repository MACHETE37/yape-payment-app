import { Component, signal } from '@angular/core';
import { Cliente } from '../../../interfaces/Cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance',
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css'
})
export class BalanceComponent {

  diferenciaDias: Number = 0;

  jsonObject=signal<Cliente | null>(null);
  constructor(private router: Router) {
    const data = localStorage.getItem('data');
    console.log(data)
    if (data) {
      this.jsonObject.set(JSON.parse(data));

      const fechaCorte = this.jsonObject()?.fecha_corte;

      if (fechaCorte) {
        const fechaGuardada = new Date(fechaCorte);
        const fechaActual = new Date();

        const diferenciaMs = fechaActual.getTime() - fechaGuardada.getTime();
        this.diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));
      } else {
        console.warn('fecha_corte no está definida');
}

    } 
    // Constructor del componente
  }

  // Métodos y propiedades del componente
  onInit() {

  }

  OpenPayment() {
          this.router.navigate(['/search-user']);
  }
}
