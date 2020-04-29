import { GenericCollection } from '../genericCollection';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductCollection<Product> extends GenericCollection<Product>{
    constructor(protected collectionName: string, protected firestore: AngularFirestore) {
        super(collectionName, firestore);
    }
}