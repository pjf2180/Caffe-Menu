import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './image-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    SharedModule
  ]
})
export class ImageViewerModule { }
