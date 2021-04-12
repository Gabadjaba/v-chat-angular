import { Injectable } from '@angular/core';
import { CookieService } from './cookie-service/cookie-service';

@Injectable()
export class AuthService {
  login: string | null;
  password: string | null;

  private tokenName = 'jwt';

  constructor(private cookieService: CookieService) {
    this.login = null;
    this.password = null;
  }

  loginAction(login: string, password: string): void {
    this.cookieService.setCookie('jwt', 'test');
    console.log(this.cookieService.getCookie('jwt'));


    // const authRequest = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve({
    //       jwt: 'test jwt'
    //     });
    //   }, 300);
    // });
    //
    // authRequest
    //   .then(data => {
    //     this.login = login;
    //     this.password = password;
    //     // this.token = data.jwt;
    //   });
  }

  registerAction(): void {

  }

  get token(): string | null {
    return window.localStorage.getItem(this.tokenName);
  }

  set token(value: string | null) {
    if (value) {
      window.localStorage.setItem(this.tokenName, value);
    } else {
      throw new Error('JWT value is empty, writing is not possible');
    }
  }
}
