import { Component, OnInit } from '@angular/core';
import { Producto, productos } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Producto| undefined;
  
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Corregir la variable a 'productos' en lugar de 'producto'
    this.product = productos.find(producto => producto.id === productIdFromRoute);
  }

  AddToCart(product:Producto){
    this.cartService.addToCart(product)
    window.alert ('Producto agregado al carrito')
  }
}
