import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';



@NgModule({
  declarations: [ SideMenuComponent],
  imports: [
    CommonModule,
    AngularMaterialComponentsModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
