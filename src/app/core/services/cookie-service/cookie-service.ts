import { CookieParams, CookieServiceInterface } from './cookie-service.interface';

export class CookieService implements CookieServiceInterface {
  getCookie(name: string): string | null {
    const result = document.cookie
      .split(';')
      .find(e => e.startsWith(name))?.split('=');

    return result ? encodeURIComponent(result[1]) : null;
  }

  setCookie(name: string, value: string, cookieParams: CookieParams = { secure: true }): void {
    cookieParams = { ...cookieParams, secure: true };

    let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    let param: keyof CookieParams;
    for (param in cookieParams) {
      if (cookieParams.hasOwnProperty(param)) {
        updatedCookie += `; ${param}`;
        const optionValue = cookieParams[param];

        if (optionValue instanceof Date) {
          updatedCookie += `= ${optionValue.toUTCString()}`;
        } else if (optionValue !== true) {
          updatedCookie += `= ${optionValue}`;
        }
      }
    }

    document.cookie = updatedCookie;
  }

  deleteCookie(name: string): void {
    this.setCookie(name, '', { maxAge: '-1' });
  }
}
