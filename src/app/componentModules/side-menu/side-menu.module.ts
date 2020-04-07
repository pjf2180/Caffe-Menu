import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideMenuComponent } from './side-menu.component';
import { AngularMaterialComponentsModule } from 'src/app/angular-material-components/angular-material-components.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ SideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialComponentsModule
  ],
  exports: [SideMenuComponent]
})
export class SideMenuModule { }
