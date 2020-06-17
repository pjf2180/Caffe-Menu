import { CartItem } from 'src/app/models/cart-item.models';
import { ShoppingProduct } from 'src/app/models/shopping-product';

export function addItemToList(currentCartItems: CartItem[], itemAdded: ShoppingProduct): CartItem[] {


    //If item added exists withing current cart items
    if (currentCartItems.find(item => item.product.id === itemAdded.id)) {
        return currentCartItems.map(cartItem => {
            if (cartItem.product.id === itemAdded.id) {
                return {
                    product: cartItem.product,
                    quantity: cartItem.quantity + 1
                }
            }
            else {
                return cartItem
            }
        })
    }
    else {
        return [...currentCartItems, { product: itemAdded, quantity: 1 }]
    }
}

export function setItemQuantity(currentCartItems: CartItem[], shoppingProduct: ShoppingProduct, quantity: number): CartItem[] {

    return currentCartItems.map((item): CartItem => {
        if (item.product.id === shoppingProduct.id) {
            return {
                product: { ...shoppingProduct },
                quantity: quantity
            }
        } else {
            return { ...item }
        }
    });
}

export function clearItem(currentCartItems: CartItem[], shoppingProduct: ShoppingProduct): CartItem[] {
    return currentCartItems.filter(c => c.product.id !== shoppingProduct.id);
}

export function calculateCartTotal(cartItems: CartItem[]): number {
    return cartItems.reduce((total, cartItem) => (cartItem.quantity * cartItem.product.price + total), 0);
}