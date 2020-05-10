import { Injectable } from '@angular/core';
import { ProductCollection } from '../db/firebase-db/collections/products.collections';
import { IAdminProduct } from '../models/admin-product.models';
import { AdminProductCollection } from '../db/firebase-db/collections/admin-product.collections';
import { IProduct } from '../models/product.models';
import { Observable } from 'rxjs';
import { ShoppingProduct } from '../models/shopping-product';

@Injectable({
  providedIn: 'root'
})
export class AdminProductService {

  constructor(
    private productCol: ProductCollection<IProduct>,
    private adminProductCol: AdminProductCollection<IAdminProduct>) { }

  getAdminProducts(): Observable<IAdminProduct[]> {
    return this.adminProductCol.get()
  }
  addAdminProduct(shoppingProduct: ShoppingProduct) {

    console.log(shoppingProduct);
    const adminProduct: IAdminProduct = {
      active: true,
      attributes:shoppingProduct.attributes,
      available: true,
      description: shoppingProduct.description,
      imageUrl: 'http://source.unsplash.com/random',
      name: shoppingProduct.name,
      note: shoppingProduct.note,
      price: shoppingProduct.price,
      soldInCurrentMonth: 0,
      soldInYear: 0,
      stockQty: 0,
      rating: 0,

    }
    console.log(adminProduct);
    const adminProductRef =
      this.adminProductCol.newDocRef();
    const shoppingProductRef = this.productCol.newDocRef();

    return this.adminProductCol.addBatch([
      { docRef: adminProductRef, item: adminProduct },
      { docRef: shoppingProductRef, item: shoppingProduct }
    ])

  }
  addStockToProduct(productId: string, increment: number) {
    return this.adminProductCol
      .runTransaction((docData)=> ({stockQty: docData.stockQty + increment}),this.adminProductCol.getDocRef(productId));
  }
  togleActiveProp(productId: string) {
    return this.adminProductCol
      .runTransaction((docData) => ({ available: !docData.available }), this.adminProductCol.getDocRef(productId));
  }
  editAdminProduct(product: IAdminProduct){
    return this.adminProductCol.update(product)
  }
}

