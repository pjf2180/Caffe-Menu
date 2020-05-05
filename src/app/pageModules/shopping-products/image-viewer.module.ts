import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ImageViewerComponent } from './image-viewer.component';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [ImageViewerComponent],
  imports: [
    SharedModule,
    ComponentsModule
  ]
})
export class ImageViewerModule { }
