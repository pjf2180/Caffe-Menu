import { ItemCardVm } from '../../image-viewer/item-card/item-card-Vm';

export interface ProductVm extends ItemCardVm {
    soldInCurrentMonth: number;
    soldInYear: number;
    available: boolean;
    lastSaleDate: number;
    name: string;
    notes: string;
    description: string;
    attributes: string[];
    rating: number;
    stockQty: number;
    active: boolean;
}