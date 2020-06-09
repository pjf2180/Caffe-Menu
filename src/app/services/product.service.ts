import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.models';
import { ProductCollection } from '../db/firebase-db/collections/products.collections';
import { ShoppingProduct } from '../models/shopping-product';
import { ProductCategory } from '../models/product-category.models';

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
  getProductCategories(): Observable<ProductCategory[]> {
    const categories: ProductCategory[] = [
      { 
        name: 'Muffins', id: 'hotdrinksid',
        items: [
          {
            name: 'Chocolate',
            id: ''
          },
          {
            name: 'Raspberry',
            id: ''
          },
          {
            name: 'Honey and oats',
            id: ''
          },
          {
            name: 'Classic',
            id: ''
          },
        ]
      },
      { 
        name: 'Cookies', id: 'hotdrinksid',
        items: [
          {
            name: 'Chocolate chip',
            id: ''
          },
          {
            name: 'Chocolate chip peanut',
            id: ''
          },
          {
            name: 'White chocolate chip',
            id: ''
          },
        ]
      },
      { 
        name: 'Croissants', id: 'hotdrinksid',
        items: [
          { 
            name: 'Classic',
            id: ''
          }
        ]
      },
      { 
        name: 'Brioche', id: 'hotdrinksid',
        items: [
          {
            name: 'Orange and almonds',
            id: ''
          },
          {
            name: 'Berries',
            id: ''
          }
        ]
      }
    ];

    return of(categories);
    
  }
}
