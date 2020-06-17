import { IProduct } from './product.models';

export interface ShoppingProduct extends IProduct {
    price: number;
    rating: number;
    imageUrl: string;
    available: boolean;
    active: boolean;
    id?: string;
    attributes: string[];
    description: string;
    name: string;
    note: string;
    categoryName?: string;
}