import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item.models';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;
  
  constructor() { }

  ngOnInit() {
  }

}
