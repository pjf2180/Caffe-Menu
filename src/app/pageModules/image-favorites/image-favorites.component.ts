import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { ShoppingProduct } from 'src/app/models/shopping-product';

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
    this.products$ = this.adminProductService.getAdminProducts();
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
      }).catch(err => console.log(err)).finally(() => console.log('All done'))
  }
  addStockQty(event: { productId: string, quantity: number }) {
    this.adminProductService.addStockToProduct(event.productId, event.quantity)
      .then(() => console.log('succes adding stock')).catch(e => console.log(e));
  }
  togleActive(event) {
   this.adminProductService.togleActiveProp(event)
   .then(()=>console.log('Toggle succesful'))
   .catch(e=> console.error(e));
  }

}
