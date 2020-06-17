import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.models';
import { ProductCollection } from '../db/firebase-db/collections/products.collections';
import { ShoppingProduct } from '../models/shopping-product';
import { ProductCategory } from '../models/product-category.models';
import { ProductCategoriesCollection } from '../db/firebase-db/collections/categories.collection';

@Injectable({
  providedIn: 'root'
})
export class ShoppingProductService {

  constructor(
    public shoppingProducts: ProductCollection<ShoppingProduct>,
    public  categoryCollection: ProductCategoriesCollection<ProductCategory>) { }

  addProduct() {

  }

  getProductList(): Observable<ShoppingProduct[]> {
    return this.shoppingProducts.get();
  }
  getProductCategories(): Observable<ProductCategory[]> {
    return this.categoryCollection.get()
  }
  getProductById(id: string) {
    return this.shoppingProducts.getById(id);
  }
}
