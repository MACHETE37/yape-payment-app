import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dni-ruc-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dni-ruc-register.component.html',
  styleUrls: ['./dni-ruc-register.component.css']
})
export class DniRucRegisterComponent {
  registerForm: FormGroup;
  documentType: 'dni' | 'ruc' = 'dni';
  userData: any = null;
  isLoading = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      documentType: ['dni'],
      documentNumber: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
      name: ['', Validators.required],
      serviceNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^9\d{8}$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  checkPasswords(group: FormGroup) {
    const pass = group.get('password')?.value;
    const confirmPass = group.get('confirmPassword')?.value;
    return pass === confirmPass ? null : { notSame: true };
  }

  searchByDocument() {
    if (this.registerForm.get('documentNumber')?.invalid) return;

    this.isLoading = true;
    const docNumber = this.registerForm.get('documentNumber')?.value;

    // Simulación de búsqueda en API
    setTimeout(() => {
      this.isLoading = false;
      
      // Datos de ejemplo (en producción usarías una API real)
      if (this.documentType === 'dni' && docNumber === '12345678') {
        this.userData = { name: 'JUAN PEREZ GARCIA' };
        this.registerForm.patchValue({ name: this.userData.name });
      } 
      else if (this.documentType === 'ruc' && docNumber === '20123456789') {
        this.userData = { name: 'EMPRESA COMERCIAL SAC' };
        this.registerForm.patchValue({ name: this.userData.name });
      }
      else {
        alert('Documento no encontrado');
      }
    }, 1500);
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    // Aquí iría la lógica para registrar al usuario
    console.log('Datos de registro:', this.registerForm.value);
    this.router.navigate(['/confirmation']);
  }

  get docNumberLength() {
    return this.documentType === 'dni' ? 8 : 11;
  }
}