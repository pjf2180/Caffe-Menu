import { NgModule } from '@angular/core';
import { ImageFavoritesComponent } from './image-favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [ImageFavoritesComponent,ProductCardComponent],
  imports: [
    SharedModule
  ]
})
export class ImageFavoritesModule { }
