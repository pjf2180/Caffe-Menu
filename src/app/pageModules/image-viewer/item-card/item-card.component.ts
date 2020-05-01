import { Component, OnInit, Input } from '@angular/core';
import { ShoppingProduct } from 'src/app/models/shopping-product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input('product') viewModel: ShoppingProduct;

  constructor() { }

  ngOnInit() {
    console.log(this.viewModel)
  }

}
