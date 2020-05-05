
export interface IFireStoreCollectionItem {
    id?: string;
    active: boolean;
}
export interface IFirestoreCollection<T> {
    add(item: IFireStoreCollectionItem);
    update(item: IFireStoreCollectionItem, changes: any);
    remove(id: string);
    get(id: string);
}
