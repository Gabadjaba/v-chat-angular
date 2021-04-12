import {Component, Input, Output, EventEmitter } from '@angular/core';
import { FormStateEnum } from './enums/form-state.enum';
import { LoginDataModel } from './models/login-data.model';

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

  stateTypes = FormStateEnum;
  currentState: FormStateEnum;

  @Output() registerAction: EventEmitter<any> = new EventEmitter();
  @Output() loginAction: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.login = '';
    this.password = '';
    this.loginLabel = 'Login';
    this.passwordLabel = 'Password';
    this.isRegister = true;

    this.currentState = FormStateEnum.LOGIN;
  }

  onRegister(): void {
    const { login, password } = this;
    this.registerAction.emit(new LoginDataModel(login, password));
  }

  onLogin(): void {
    const { login, password } = this;
    this.loginAction.emit(new LoginDataModel(login, password));
  }

  changeState(state: FormStateEnum): void {
    this.currentState = state;
  }
}
