import { Injectable } from "@angular/core";
import { Product } from "../models/producto.model";

@Injectable({providedIn:'root'})
export class ProductService{
    private readonly products:Product[] = [
        {
            id:1,
            name:'Audifonos',
            price: 599,
            imagenUrl: 'https://picsum.photos/seed/headphones/400/300',
            category: 'Audio',
            description: 'Audifonos inalambricos',
            inStock: true
        }
    ];
    getAll():Product[]{
        return this.products;
    }
}

