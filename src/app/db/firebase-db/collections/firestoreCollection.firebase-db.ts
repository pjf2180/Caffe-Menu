
export interface IFireStoreCollectionItem {
    uuid?: string;
    active: boolean;
}
export interface IFirestoreCollection<T> {
    add(item: IFireStoreCollectionItem);
    update(item: IFireStoreCollectionItem, changes: any);
    remove(uuid: string);
    get(uuid: string);
}