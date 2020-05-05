import { IFirestoreCollection, IFireStoreCollectionItem } from './firestoreCollection.firebase-db';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';


export type TransformFunction = (docData: firebase.firestore.DocumentData) => firebase.firestore.UpdateData

export class GenericCollection<T> implements IFirestoreCollection<T>{

    protected collectionName: string;
    public collectionReference: AngularFirestoreCollection<T>;

    constructor(protected afs: AngularFirestore) {

    }
    add(item: IFireStoreCollectionItem) {
        return this.afs.collection(this.collectionName).add(item);
    }
    update(item: IFireStoreCollectionItem, changes: any) {
        return this.collectionReference.doc(`${item.id}`)
    }
    remove(uuid: string) {
        this.collectionReference.doc(`${uuid}`).update({ active: false });
    }
    get() {
        return this.collectionReference.snapshotChanges()
            .pipe(map(snapshotChanges => {
                const documents = snapshotChanges.map(snap => {
                    return {
                        ...snap.payload.doc.data(),
                        id: snap.payload.doc.id
                    }
                })
                return documents;
            }))
    }
    batch() {
        return this.afs.firestore.batch()
    }
    addBatch(arr: { docRef: DocumentReference, item: any }[]) {
        const batch = this.batch()
        arr.forEach(item => {
            batch.set(item.docRef, item.item);
        })
        return batch.commit();
    }
    runTransaction(transformFunction: TransformFunction, docRef: DocumentReference) {
        let transaction = this.afs.firestore.runTransaction(t => {
            return t.get(docRef)
                .then(doc => {
                    let newDocument = transformFunction(doc.data())
                    t.update(docRef, newDocument);
                })
        })
        return transaction;
    }
    getDocRef(uuid: string): DocumentReference {
        return this.collectionReference.doc<T>(uuid).ref;
    }
    newDocRef(): DocumentReference {
        const uuid = this.afs.createId();
        return this.collectionReference.doc<T>(uuid).ref;
    }
    protected setCollectionName(name: string) {
        this.collectionName = name;
        this.collectionReference = this.afs.collection<T>(this.collectionName);
    }

}


