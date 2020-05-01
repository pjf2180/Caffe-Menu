import { IFirestoreCollection, IFireStoreCollectionItem } from './firestoreCollection.firebase-db';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

export class GenericCollection<T> implements IFirestoreCollection<T>{

    protected collectionName: string;
    public collectionReference: AngularFirestoreCollection<T>;
    protected instance: GenericCollection<T>;

    constructor(protected firestore: AngularFirestore) {

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
    get() {
        return this.collectionReference.valueChanges()
    }
    batch() {
        return this.firestore.firestore.batch()
    }
    addBatch(arr: { docRef: DocumentReference, item: any }[]) {
        const batch = this.batch()
        arr.forEach(item => {
            batch.set(item.docRef, item.item);
        })
        return batch.commit();
    }
    newDocRef(): DocumentReference {
        const uuid = this.firestore.createId();
        return this.collectionReference.doc<T>(uuid).ref;
    }
    protected setCollectionName(name: string) {
        this.collectionName = name;
        this.collectionReference = this.firestore.collection<T>(this.collectionName);
    }
}

