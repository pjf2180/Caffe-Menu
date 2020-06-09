import { Component, OnInit, Input } from '@angular/core';
import { IAdminProduct } from 'src/app/models/admin-product.models';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input('item') viewModel: IAdminProduct;

  constructor() { }

  ngOnInit() {

  }

}
