import { Component, OnInit } from '@angular/core';
import { ProductVm } from './product-card/productVm';
import { ProductService } from 'src/app/services/product.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-image-favorites',
  templateUrl: './image-favorites.component.html',
  styleUrls: ['./image-favorites.component.css']
})
export class ImageFavoritesComponent implements OnInit {

  products: ProductVm[];
  constructor( private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProductList()
  }

  onAddClick() {
    this.productService.addProduct()
      .then((ref) => {
        console.log(ref.id);
      }).catch(err => console.log(err))
  }

}
