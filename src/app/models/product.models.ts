import { IFireStoreCollectionItem } from '../db/firebase-db/collections/firestoreCollection.firebase-db';

export interface Product extends IFireStoreCollectionItem{
    name: string;
    notes:string;
    description:string;
    attributes: string[];
    rating: number;
    stockQty: number;
}