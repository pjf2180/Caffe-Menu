import { NgModule } from '@angular/core';
import { AngularMaterialComponentsModule } from '../angular-material-components/angular-material-components.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ],
  exports: [
    CommonModule,
    AngularMaterialComponentsModule
  ]
})
export class SharedModule { }
