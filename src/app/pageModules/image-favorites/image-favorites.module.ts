import { NgModule } from '@angular/core';
import { ImageFavoritesComponent } from './image-favorites.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ImageFavoritesComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ]
})
export class ImageFavoritesModule { }
