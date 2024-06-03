import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private key = 'encrypt!135790';

  private storage?: Storage;

  constructor() {
    if (typeof window === 'undefined') return;
    this.storage = window?.localStorage;
  }

  //To encrypt input data
  private encrypt(password: string): string {
    return CryptoJS.AES.encrypt(password, this.key).toString();
  }

  //To decrypt input data
  private decrypt(passwordToDecrypt: string) {
    return CryptoJS.AES.decrypt(passwordToDecrypt, this.key).toString(
      CryptoJS.enc.Utf8
    );
  }

  set(key: string, value: any): boolean {
    if (this.storage) {
      this.storage.setItem(key, JSON.stringify(this.encrypt(value)));
      return true;
    }
    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return this.decrypt(JSON.parse(this.storage.getItem(key) || '{}'));
    }
    return null;
  }

  remove(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  clear(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }
}
