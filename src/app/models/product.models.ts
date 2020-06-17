import { IFireStoreCollectionItem } from '../db/firebase-db/firestoreCollection.firebase-db';

export interface IProduct extends IFireStoreCollectionItem {
    name: string;
    attributes: string[];
    note: string;
    price: number;
    description: string;
    rating: number;
    imageUrl: string;
    available: boolean;
    categoryId?: string;
}


