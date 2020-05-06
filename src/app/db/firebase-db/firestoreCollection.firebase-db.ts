
export interface IFireStoreCollectionItem {
    id?: string;
    active: boolean;
}
export interface IFirestoreCollection<T> {
    add(item: T);
    update(item: T);
    remove(id: string);
    get(id: string);
}
