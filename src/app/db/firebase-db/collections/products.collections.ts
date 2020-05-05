import { GenericCollection } from '../genericCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { FirebaseDbModule } from '../firebase-db.module';

@Injectable({
    providedIn: FirebaseDbModule
})
export class ProductCollection<Product> extends GenericCollection<Product>{
    constructor(protected afs: AngularFirestore) {
        super(afs);
        this.setCollectionName('shoppingProducts');
    }
}