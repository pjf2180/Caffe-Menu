import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialComponentsModule } from '../angular-material-components/angular-material-components.module';
import { SideMenuModule } from '../componentModules/side-menu/side-menu.module';
import { MenuModule } from '../componentModules/menu/menu.module';
import { RouterModule } from '@angular/router';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageFavoritesModule } from '../pageModules/image-favorites/image-favorites.module';
import { ImageViewerModule } from '../pageModules/image-viewer/image-viewer.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    AngularMaterialComponentsModule,
    ImageViewerModule,
    ImageFavoritesModule,
    SideMenuModule,MenuModule,
  ],
  exports: [ DashboardComponent]
})
export class DashboardModule { }
