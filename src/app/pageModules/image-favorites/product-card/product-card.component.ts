import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('item') viewModel: IProduct;
  colorHierarchy = ['primary', 'accent']
  constructor() { }

  ngOnInit() {
  }
  getColor(i: number) {
    return i > 1? this.colorHierarchy[i] : ''
  }

}
