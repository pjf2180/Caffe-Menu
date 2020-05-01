import { IProduct } from './product.models';

export class ShoppingProduct implements IProduct{
    name: string;
    attributes: string[];
    note: string;
    price: number;
    description: string;
    rating: number;
    imageUrl: string;
    available: boolean;
    uuid?: string;
    active: boolean;

}