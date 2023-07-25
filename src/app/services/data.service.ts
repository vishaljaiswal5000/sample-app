import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  saveIntoLocalStorage(tableName: string, data: any) {
    localStorage.setItem(tableName, JSON.stringify(data));
  }

  getLocalStorage(tableName: string) {
    return localStorage.getItem(tableName);
  }
}
