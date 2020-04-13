import { NgModule } from '@angular/core';
import { AngularMaterialComponentsModule } from './angular-material-components/angular-material-components.module';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './generic-components/content-card/content-card.component';



@NgModule({
  declarations: [ContentCardComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialComponentsModule,
    ContentCardComponent
  ]
})
export class SharedModule { }
