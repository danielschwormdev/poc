import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  cache = '';

  public checked = [''];

  public setCheckedShared(inputChecked: string[]) {
    this.checked = inputChecked;
  }

  public getCheckedShared() {
    return this.checked;
  }
}
