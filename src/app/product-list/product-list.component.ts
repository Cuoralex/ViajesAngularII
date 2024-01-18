import { Component } from '@angular/core';
import { Producto, productos } from '../products';  // Asumiendo que tienes un archivo products.ts donde defines la interfaz Product

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Producto[] = [...productos];  // Si productos es un array, asegúrate de que tenga el tipo Product[]

  share(product: Producto): void {
    window.alert('El producto ' + product.name + ' se ha compartido');
  }
}
