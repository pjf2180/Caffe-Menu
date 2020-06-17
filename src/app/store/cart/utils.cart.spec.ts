import { CartItem } from "src/app/models/cart-item.models";
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { addItemToList } from 'src/app/store/cart/utils.cart';


describe('store/cart utils', () => {
    it('should add item to empty list', () => {
        //Arrange
        const currentCartItems: CartItem[] = [];
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
            id: 'uuid-123'
        };

        //Act
        const newCart: CartItem[] = addItemToList(currentCartItems, itemToAdd);

        //Assert
        expect(newCart.length).toBeGreaterThan(0);
    })
    it('should add item with quantity === 1', () => {
        //Arrange
        const currentCartItems: CartItem[] = [];
        const productId = 'uuid-123'
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
            id: productId
        };

        //Act
        const newCart: CartItem[] = addItemToList(currentCartItems, itemToAdd);
        const addedProductInCart = newCart.find(x => x.product.id === productId);

        //Assert
        expect(addedProductInCart.quantity).toBe(1);
    })
    it('should add item with quantity === 2', () => {
        //Arrange
        const initialQty = 1
        const productId = 'uuid-123'
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
            id: productId
        };
        const currentCartItems: CartItem[] = [
            {
                product: { ...itemToAdd },
                quantity: initialQty
            }
        ];

        //Act
        const newCart: CartItem[] = addItemToList(currentCartItems, itemToAdd);
        const addedProductInCart = newCart.find(x => x.product.id === productId);
        //Assert
        expect(addedProductInCart.quantity).toBe(initialQty + 1);
    });
    it('should add item to non empty list', () => {
        //Arrange
        const initialQty = 3
        const productId = 'uuid-123'
        const initialCartItem: ShoppingProduct = {
            active: true,
            attributes: ['non-gmo'],
            available: true,
            description: 'No description',
            imageUrl: '',
            name: 'Testing product',
            note: 'test',
            price: 4.50,
            rating: 4,
            id: productId
        };
        const initialCart: CartItem[] = [
            {
                product: { ...initialCartItem },
                quantity: initialQty
            }
        ];
        const nextItemAdded: ShoppingProduct = {
            ...initialCartItem,
            id: 'uuid-1234'
        }

        //Act
        const newCart: CartItem[] = addItemToList(initialCart, nextItemAdded);

        //Assert
        expect(newCart.length).toBe(initialCart.length + 1);
    });
})