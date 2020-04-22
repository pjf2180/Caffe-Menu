import { ItemCardVm } from '../../image-viewer/item-card/item-card-Vm';

export interface ProductVm extends ItemCardVm {
    soldInCurrentMonth:number;
    soldInYear: number;
    available: boolean;
    lastSaleDate: number;
}