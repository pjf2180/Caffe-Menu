import { NgModule } from '@angular/core';
import { ImageViewerComponent } from './image-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemCardComponent } from './item-card/item-card.component';




@NgModule({
  declarations: [ImageViewerComponent, ItemCardComponent],
  imports: [
    SharedModule
  ]
})
export class ImageViewerModule { }
