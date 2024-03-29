import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { ShoppingProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  shoppingProducts: Observable<ShoppingProduct[]>;

  constructor(private shoppingProductService: ShoppingProductService) { }

  ngOnInit() {
    this.shoppingProducts = this.shoppingProductService.getProductList()
  }

}
