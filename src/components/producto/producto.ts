import { Component, Input } from '@angular/core';
import { Product } from '../../app/models/producto.model';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class ProductCardComponent {
  @Input({required:true})products!:Product;

}
