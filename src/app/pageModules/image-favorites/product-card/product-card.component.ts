import { Component, OnInit, Input } from '@angular/core';
import { ProductVm } from './productVm';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('item') viewModel: ProductVm;
  constructor() { }

  ngOnInit() {
    console.log(this.viewModel);
  }

}
