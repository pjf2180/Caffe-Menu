import { IFirestoreCollection, IFireStoreCollectionItem } from './firestoreCollection.firebase-db';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { NgZone } from '@angular/core';


export type TransformFunction<T> = (docData: T) => firebase.firestore.UpdateData

export class GenericCollection<T> implements IFirestoreCollection<T>{

    protected collectionName: string;
    public collectionReference: AngularFirestoreCollection<T>;

    constructor(protected afs: AngularFirestore) {
    }
    createId() {
        return this.afs.createId();
    }
    add(item: T, id?: string) {
        const newId = this.afs.createId();
        const newDoc = this.afs.collection(this.collectionName).doc(id || newId);
        return newDoc.set({ ...item, id: id || newId });
        // return this.afs.collection(this.collectionName).add(item);
    }
    update(item: T) {
        return this.collectionReference.doc(`${(item as unknown as IFireStoreCollectionItem).id}`).set(item)
    }
    remove(uuid: string) {
        this.collectionReference.doc(`${uuid}`).update({ active: false });
    }
    getById(id: string): Promise<T> {
        return this.collectionReference.ref.doc(id)
            .get()
            .then(docSnapshot => {
                return docSnapshot.data() as T
            })
            .catch(reason => undefined);
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
        arr.forEach(batchItem => {

            batch.set(batchItem.docRef, { ...batchItem.item, id: batchItem.docRef.id });
        })
        return batch.commit();
    }
    runTransaction(transformFunction: TransformFunction<T>, docRef: DocumentReference) {
        let transaction = this.afs.firestore.runTransaction(t => {
            return t.get(docRef)
                .then(doc => {
                    let newDocument = transformFunction(doc.data() as T)
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


