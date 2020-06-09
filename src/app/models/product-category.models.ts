import { IProduct } from './product.models';

export interface ProductCategory {
    name: string;
    id: string;
    items?: { name: string, id: string }[]
}