import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import { Observable } from 'rxjs';
import { selectCartItems } from 'src/app/store/cart/selectors/cart.selectors';
import { CartItem } from 'src/app/models/cart-item.models';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: Observable<CartItem[]>;

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.items = this.store.select(selectCartItems);
  }

}
