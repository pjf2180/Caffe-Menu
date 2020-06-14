import { Component, OnInit } from '@angular/core';
import { ShoppingProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/models/product-category.models';
import { Observable } from 'rxjs';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-state';
import { selectMenuItems } from 'src/app/store/menu/selectors/menu.selectors';
import * as fromMenuActions from '../../store/menu/actions/menu.actions'

@Component({
  selector: 'app-categories',
  host: {'class': 'col-12 col-lg-8'},
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<ProductCategory[]>;
  products: Observable<ShoppingProduct[]>;

  constructor(public store: Store<AppState>,public productService: ShoppingProductService) { }

  ngOnInit() {
    this.categories = this.productService.getProductCategories();
    this.products = this.store.select(selectMenuItems);
    this.store.dispatch(fromMenuActions.loadMenus());
  }


}
