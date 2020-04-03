import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFavoritesComponent } from './image-favorites.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';



@NgModule({
  declarations: [ImageFavoritesComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ]
})
export class ImageFavoritesModule { }
