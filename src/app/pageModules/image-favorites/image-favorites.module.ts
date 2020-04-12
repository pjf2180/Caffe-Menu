import { NgModule } from '@angular/core';
import { ImageFavoritesComponent } from './image-favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ImageFavoritesComponent],
  imports: [
    SharedModule
  ]
})
export class ImageFavoritesModule { }
