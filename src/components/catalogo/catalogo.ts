import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductsService } from '../../app/services/productos.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './catalogo.html',
  styleUrls: ['./catalogo.css'],
})
export class CatalogoComponent {

  private productsService = inject(ProductsService);

  products = toSignal(
    this.productsService.getAll(),
    { initialValue: [] }
  );

}