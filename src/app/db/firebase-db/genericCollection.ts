import { IFirestoreCollection, IFireStoreCollectionItem } from './collections/firestoreCollection.firebase-db';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export class GenericCollection<T> implements IFirestoreCollection<T>{

    protected readonly collectionName: string;
    private collectionReference: AngularFirestoreCollection<T>;
    protected instance: GenericCollection<T>;

    constructor(collection: string, protected firestore: AngularFirestore) {
        this.collectionName = collection;
        this.collectionReference = firestore.collection<T>(collection);
    }
    add(item: IFireStoreCollectionItem) {
        return this.firestore.collection(this.collectionName).add(item);
    }
    update(item: IFireStoreCollectionItem, changes: any) {
        return this.collectionReference.doc(`${item.uuid}`)
    }
    remove(uuid: string) {
        this.collectionReference.doc(`${uuid}`).update({ active: false });
    }
    get(uuid: string) {
        return this.collectionReference.doc(`${uuid}`).valueChanges();
    }
}

