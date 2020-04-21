import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { AngularMaterialComponentsModule } from 'src/app/shared/angular-material-components/angular-material-components.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule,
    ToolbarModule,
    SharedModule
  ],
  exports: [ MenuComponent]
})
export class MenuModule { }
