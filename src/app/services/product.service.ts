import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.models';
import { ProductCollection } from '../db/firebase-db/collections/products.collections';
import { ShoppingProduct } from '../models/shopping-product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingProductService {

  constructor(private shoppingProducts: ProductCollection<IProduct>) { }

  addProduct() {
    
  }

  getProductList(): Observable<ShoppingProduct[]> {
    return this.shoppingProducts.get();
  }
}
