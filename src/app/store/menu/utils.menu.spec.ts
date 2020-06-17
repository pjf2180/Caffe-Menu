import { ShoppingProduct } from "src/app/models/shopping-product";
import { groupProductsByCategory } from './utils.menu';

describe('store/menu/utils', () => {

    const itemToAdd: ShoppingProduct = {
        active: true,
        attributes: ['non-gmo'],
        available: true,
        description: 'No description',
        imageUrl: '',
        name: 'Testing product',
        note: 'test',
        price: 4.50,
        rating: 4,
        id: 'uuid-123',
        categoryName: ''
    };


    it('Should return a an array of groups', () => {
        //Arrange

        const categories = ['Muffins', 'Cookies', 'Brioches'];
        const shoppingProducts: ShoppingProduct[] = categories.map(categoryName => {
            return { ...itemToAdd, categoryName }
        });

        // Act
        const productCategories = groupProductsByCategory(shoppingProducts);

        // Assert
        expect(productCategories.length).toBe(categories.length);

    });

    it('Should return a an array of 3 groups', () => {
        //Arrange
        const categoriesDef = [
            { name: 'Muffins', times: 2 },
            { name: 'Cookies', times: 3 },
            { name: 'Brioches', times: 4 },
        ];
        let shoppingProducts: ShoppingProduct[][] = categoriesDef.map((catDef): ShoppingProduct[] => {
            let shoppingProducts: ShoppingProduct[] = []
            for (let i = 0; i < catDef.times; i++) {
                shoppingProducts.push({ ...itemToAdd, categoryName: catDef.name })
            }
            return shoppingProducts
        });

        const productList = shoppingProducts.reduce((p, c) => [...p, ...c])

        // Act
        const productCategories = groupProductsByCategory(productList);
   
        // Assert
        expect(productCategories.length).toEqual(categoriesDef.length);

    });


})