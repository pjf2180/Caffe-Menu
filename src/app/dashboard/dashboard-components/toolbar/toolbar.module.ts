import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { AngularMaterialComponentsModule } from 'src/app/shared/angular-material-components/angular-material-components.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
