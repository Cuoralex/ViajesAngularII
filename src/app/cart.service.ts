import { Injectable } from '@angular/core';
import { Producto } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  items: Producto []= [];
 
  constructor() { }

  addToCart (product: Producto) {
    this.items.push(product)
  }

  getItem(){
    return this.items;
  }

  clearCart(){
    this.items=[];
    return this.items;
  }

}
