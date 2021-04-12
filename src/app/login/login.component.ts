import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/services/auth-service';
import { LoginDataModel } from './login-form/models/login-data.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(value: LoginDataModel): void {
    this.authService.loginAction(value.login, value.password);
  }

  register(value: LoginDataModel): void {
    console.log(value);
  }
}
