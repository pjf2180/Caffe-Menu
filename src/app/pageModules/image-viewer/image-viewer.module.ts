import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageViewerComponent } from './image-viewer.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';



@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ]
})
export class ImageViewerModule { }
