import { Component, OnInit } from '@angular/core';
import { ShoppingProductService } from 'src/app/services/product.service';
import { Observable, pipe } from 'rxjs';
import { IProduct } from 'src/app/models/product.models';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-image-favorites',
  templateUrl: './image-favorites.component.html',
  styleUrls: ['./image-favorites.component.css']
})
export class ImageFavoritesComponent implements OnInit {

  products$: Observable<IAdminProduct[]>;
  firstProduct: IAdminProduct;
  constructor(private adminProductService: AdminProductService) { }

  ngOnInit() {
    console.log('On init')
    this.products$ = this.adminProductService.getAdminProducts();
    this.products$
      .pipe(take(1))
      .subscribe(ps => {
        this.firstProduct = ps[0];
      })
  }

  onAddClick() {
    const adminProduct: ShoppingProduct = {
      active: true,
      attributes: ['vegan', 'non gmo'],
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      name: 'Shiba Inu',
      note: 'Dog Breed',
      rating: 0,
      available: true,
      imageUrl: 'https://source.unsplash.com/random',
      price: 650
    }
    this.adminProductService.addAdminProduct(adminProduct)
      .then((ref) => {
        console.log('All good');
      }).catch(err => console.log(err)).finally(() => console.log('All done'))
  }
  addStockQty(event: { productId: string, quantity: number }) {
    console.log(event);
    this.adminProductService.addStockToProduct(event.productId, event.quantity)
      .then(() => console.log('succes adding stock')).catch(e => console.log(e));
  }

}
