import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiBossService } from '../Services/api-boss.service';
import { BossResponse } from '../interfaces/BossResponse';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private _BossServices = inject(ApiBossService);
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;
  txtPassword = new FormControl('');
  txtEmail = new FormControl('');
  constructor(private router: Router
  ) {}

  async onSubmit() {
    const body={
      usuario: this.txtEmail.value,
      cedula: this.txtPassword.value
    }
    this._BossServices.endpointParameter="WisphubDatos/Login";
    this._BossServices.requestParameters=body;
    const response:BossResponse = await this._BossServices.PostAsync() 
    if (response.success)
    {
      console.log(response.data);
      this.router.navigate(['/search-user']);
    }

    // Validación básica (en una app real harías autentu8icación)
    //if (this.email && this.password) {
    //}
  }


}