import { NgModule } from '@angular/core';
import { AngularMaterialComponentsModule } from './angular-material-components/angular-material-components.module';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from './generic-components/content-card/content-card.component';
import { FaInputComponent } from './generic-components/fa-input/fa-input.component';
import { InputRefDirective } from './generic-components/fa-input/input-ref-directive.directive';
import { GridItemComponent } from './generic-components/grid-item/grid-item.component';
import { GridComponent } from './generic-components/grid/grid.component';




@NgModule({
  declarations: [
    ContentCardComponent,
     FaInputComponent,
     InputRefDirective,
     GridItemComponent,
     GridComponent
    ],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
  ],
  exports: [
    CommonModule,
    AngularMaterialComponentsModule,
    ContentCardComponent,
    FaInputComponent,
    InputRefDirective,
    GridItemComponent,
    GridComponent
  ]
})
export class SharedModule { }
