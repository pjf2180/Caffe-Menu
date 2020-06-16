import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { setItemQuantity, clearItem } from '../../store/cart/actions/cart.actions'
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;

  quantity: number;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.quantity = this.item.quantity;
  }

  onQtyChange() {
    if (isNullOrUndefined(this.quantity)) {
      return;
    } else {
      this.quantity = (this.quantity <= 0) ? 1 : this.quantity;
      const setQuantityAction = setItemQuantity({ shoppingProduct: { ...this.item.product }, quantity: this.quantity });
      console.log(setQuantityAction);
      this.store.dispatch(setQuantityAction);
    }
  }
  increment(qty: number) {
    const newQty = this.quantity + qty
    if (newQty === 0) {
      return
    } else {
      const setQuantityAction = setItemQuantity({
        shoppingProduct: { ...this.item.product },
        quantity: newQty
      });
      this.store.dispatch(setQuantityAction);
    }
  }
  clearItem() {
    this.store.dispatch(clearItem({ shoppingProduct: this.item.product }))
  }
}
