import { IProduct } from './product.models';

export interface ProductCategory {
    name: string;
    id: string;
    products?: IProduct[]
}