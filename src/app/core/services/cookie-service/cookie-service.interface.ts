import { Injectable } from '@angular/core';

export interface CookieParams {
  maxAge?: string;
  secure?: boolean;
  expires?: Date;
}

@Injectable()
export abstract class CookieServiceInterface {
  abstract setCookie(name: string, value: string, params?: object): void;
  abstract getCookie(name: string): string | null;
}
