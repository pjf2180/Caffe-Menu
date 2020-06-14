import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-state';
import { Observable } from 'rxjs';
import { selectCartItemQuantity } from 'src/app/store/cart/selectors/cart.selectors';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css']
})
export class CartIconComponent implements OnInit {

  quantity: Observable<number>;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.quantity = this.store.select(selectCartItemQuantity);
  }

}
