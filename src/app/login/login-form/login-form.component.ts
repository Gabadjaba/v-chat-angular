import {Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  login: string;
  loginLabel: string;
  password: string;
  passwordLabel: string;
  isRegister: boolean;

  @Output() registerAction: EventEmitter<any> = new EventEmitter();
  @Output() loginAction: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.login = '';
    this.password = '';
    this.loginLabel = 'Login';
    this.passwordLabel = 'Password';
    this.isRegister = true;
  }

  onRegister(): void {
    const { login, password } = this;
    this.registerAction.emit({ login, password });
  }

  onLogin(): void {
    const { login, password } = this;
    this.loginAction.emit({ login, password });
  }

  showRegisterForm(value: boolean): void {
    this.isRegister = value;
  }
}
