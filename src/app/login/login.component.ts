import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  txtPassword = new FormControl('');
  txtEmail = new FormControl('');
  constructor(private router: Router) {}

  onSubmit() {
    
    // Validación básica (en una app real harías autentu8icación)
    //if (this.email && this.password) {
      this.router.navigate(['/search-user']);
    //}
  }


}