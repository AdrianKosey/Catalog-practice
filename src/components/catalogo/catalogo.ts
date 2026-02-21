import { Component } from '@angular/core';
import { ProductCardComponent } from '../producto/producto';
import { ProductService } from '../../app/services/productos.service';
import { Product } from '../../app/models/producto.model';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css',
})
export class CatalogoComponent {
  products:Product[] = [];
  constructor(private productService:ProductService){
    this.products=this.productService.getAll();
  }

}
