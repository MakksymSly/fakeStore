import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProducsService {
  url: string = 'http://localhost:3000/products';
  // urlBasket: string = 'http://localhost:3000/basket';
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Iproducts[]>(this.url);
  }

  getProduct(id: number) {
    return this.http.get<Iproducts>(`${this.url}/${id}`);
  }
  postProductToBasket(product: Iproducts) {
    return localStorage.setItem(product.id.toString(), JSON.stringify(product));
  }
  getProductFromBasket() {
    // return this.http.get<Iproducts[]>(this.urlBasket);
    let values: any[] = [],
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i]) || '{}'));
    }

    return values;
    // console.log(Object.keys(localStorage));
    // return JSON.parse(localStorage.getItem('1') || '{}');
  }

  setTotalPrice(products: Iproducts[]) {
    let price: number = 0,
      keys = Object.keys(localStorage),
      i = keys.length;
    while (i--) {
      price += products[i].price * products[i].quantity;
    }
    return price;
  }
  removeFromBasket(id: number) {
    localStorage.removeItem(id.toString());
  }
}
