import { Component, inject, computed, signal} from '@angular/core';
import { Product } from '../../app/models/producto.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../app/services/productos.service';
import { CarritoComponent } from '../carrito/carrito.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarritoService } from '../../app/services/carrito.service';
import { error } from 'console';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent, CarritoComponent],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
})
export class CatalogoComponent {
  products = signal<Product[]>([]);
  inStockCount = computed(() => this.products().filter(p=>p.inStock).length);

  constructor( private productsService: ProductsService, private carritoService: CarritoService){
    this.productsService.getAll().subscribe({
      next: (data) => this.products.set(data),
      error: (err) => console.error('Error cargando XML:', err),
    });
  }
  agregar(producto: Product){
    this.carritoService.agregar(producto);
  }

}