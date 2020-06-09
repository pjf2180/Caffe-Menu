import { Component, OnInit } from '@angular/core';
import { ShoppingProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/models/product-category.models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<ProductCategory[]>;

  constructor(public productService: ShoppingProductService) { }

  ngOnInit() {
    this.categories = this.productService.getProductCategories()
  }


}
