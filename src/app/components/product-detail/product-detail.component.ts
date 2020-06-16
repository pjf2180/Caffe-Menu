import { Component, OnInit, Input } from '@angular/core';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { ActivatedRoute } from '@angular/router';
import { ShoppingProductService } from 'src/app/services/product.service';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/root-reducer';
import * as cartActions from '../../store/cart/actions/cart.actions'

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input('item') viewModel: ShoppingProduct;

  constructor(
    public store: Store<AppState>,
    public route: ActivatedRoute,
    public productsService: ShoppingProductService) { }

  ngOnInit() {
    const productId = Object.values(this.route.snapshot.params)[0];
    this.productsService.getProductById(productId)
      .then(result => {
        this.viewModel = result as ShoppingProduct;
      })
      .catch(err => console.error(err))
  }
  addToOrder() {
    this.store.dispatch(cartActions.addToCart({ itemAdded: this.viewModel }));
  }
}
