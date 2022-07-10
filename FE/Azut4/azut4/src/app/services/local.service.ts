import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  constructor() { }

  saveAll(key: string, json: string) {
    localStorage.removeItem(key);
    localStorage.setItem(key, json);
  }
}
