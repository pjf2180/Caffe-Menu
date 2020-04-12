import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';
import { ToolbarModule } from '../toolbar/toolbar.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
    ToolbarModule
  ],
  exports: [ MenuComponent]
})
export class MenuModule { }
