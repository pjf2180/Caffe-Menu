import { GenericCollection } from '../genericCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { FirebaseDbModule } from '../firebase-db.module';

@Injectable({
    providedIn: FirebaseDbModule
})
export class ProductCategoriesCollection<ProductCategory> extends GenericCollection<ProductCategory>{
    constructor(protected afs: AngularFirestore) {
        super(afs);
        this.setCollectionName('categories');
    }
}