import { IProduct } from './product.models';

export interface IAdminProduct extends IProduct {
    stockQty: number;
    soldInCurrentMonth: number;
    soldInYear: number;
    lastSaleDate?: number;
}