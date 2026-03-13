import { Component, EventEmitter,Input, Output} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Product } from '../../app/models/producto.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() add = new EventEmitter<Product>();
  onAdd(){
    this.add.emit(this.product);
  }
}
