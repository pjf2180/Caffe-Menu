import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuPageComponent } from './menu-page.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MenuPageRoutingModule } from './menu-page.routing.module';


@NgModule({
  declarations: [
    MenuPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MenuPageRoutingModule,
  ]
})
export class MenuPageModule { }
