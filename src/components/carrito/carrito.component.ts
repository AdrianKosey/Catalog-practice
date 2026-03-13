import { Component, computed } from "@angular/core";
import { CurrencyPipe } from "@angular/common";
import { Product } from "../../app/models/producto.model";
import { CarritoService } from "../../app/services/carrito.service";
import { Signal } from "@angular/core";

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent{
    carrito: Signal<Product[]>;
    total = computed(()=> this.carritoService.total());

    constructor(private carritoService: CarritoService){
        this. carrito = this.carritoService.productos;
    }
    quitar(id: number){
        this.carritoService.quitar(id);
    }
    vaciar(){
        this.carritoService.vaciar();
    }
    exportarXML(){
        this.carritoService.exportarXML();  
    }
}