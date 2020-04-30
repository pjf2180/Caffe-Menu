import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // Product service should be able to be injected with multiple collections
  constructor(private firestore: AngularFirestore) { }

  addProduct() {
    const product: Product = {
      active: true,
      attributes: ['vegan', 'non gmo'],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      name: 'Shiba Inu',
      notes: 'Dog Breed',
      rating: 0,
      stockQty: 7,
      available: true,
      imageUrl: 'https://source.unsplash.com/random',
      lastSaleDate: 0,
      note: 'no notes',
      price: 650,
      soldInCurrentMonth: 50,
      soldInYear: 340
    }
    return this.firestore.collection('products').add(product)
  }

  getProductList(): Observable<Product[]> {
    return this.firestore.collection<Product>('products').valueChanges()
      .pipe(
        map((value): Product[] => {
          return value
        })
      )
  }
}
