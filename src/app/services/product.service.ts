import { Injectable } from '@angular/core';
import { ProductVm } from '../pageModules/image-favorites/product-card/productVm';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductList(): ProductVm[] {
    const products: ProductVm[] = [
      {
        id: 'Fake-UUID',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        note: 'Dog Breed',
        imageUrl: 'https://source.unsplash.com/random',
        name: 'Shiba Inu',
        price: '650',
        rating: 4.5,
        stockQty: 3,
        available: true,
        lastSaleDate: 0,
        soldInCurrentMonth: 20,
        soldInYear: 125,
      },
      {
        id: 'Fake-UUID',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        note: 'Dog Breed',
        imageUrl: 'https://source.unsplash.com/random',
        name: 'Shiba Inu',
        price: '650',
        rating: 4.5,
        stockQty: 3,
        available: true,
        lastSaleDate: 0,
        soldInCurrentMonth: 20,
        soldInYear: 125,
      },
      {
        id: 'Fake-UUID',
        description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        note: 'Dog Breed',
        imageUrl: 'https://source.unsplash.com/random',
        name: 'Shiba Inu',
        price: '650',
        rating: 4.5,
        stockQty: 3,
        available: true,
        lastSaleDate: 0,
        soldInCurrentMonth: 20,
        soldInYear: 125,
      },
    ];

    return products;
  }
}
