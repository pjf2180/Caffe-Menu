import { ShoppingProduct } from 'src/app/models/shopping-product';
import { ProductCategory } from 'src/app/models/product-category.models';

import { groupBy } from 'lodash-es';

export function groupProductsByCategory(products: ShoppingProduct[]): ProductCategory[] {
    const groups = groupBy(products, 'categoryName');

    return Object.keys(groups).map((key): ProductCategory => {
        const groupedProducts = groups[key];
        return {
            id: '',
            name: key,
            items: groupedProducts
        }
    })
}