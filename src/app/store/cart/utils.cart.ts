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