import { Component, OnInit } from '@angular/core';
import { ProductVm } from './product-card/productVm';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-image-favorites',
  templateUrl: './image-favorites.component.html',
  styleUrls: ['./image-favorites.component.css']
})
export class ImageFavoritesComponent implements OnInit {

  products: ProductVm[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProductList()
  }

}
