import { Component, OnInit, Input } from '@angular/core';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { ActivatedRoute } from '@angular/router';
import { ShoppingProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input('item') viewModel: IAdminProduct;

  constructor(
    public route: ActivatedRoute,
    public productsService: ShoppingProductService) { }

  ngOnInit() {
    const productId = Object.values(this.route.snapshot.params)[0];
    this.productsService.getProductById(productId)
      .then(result => {
        console.log(result);
        this.viewModel = result as IAdminProduct;
      })
      .catch(err => console.error(err))
  }

}
