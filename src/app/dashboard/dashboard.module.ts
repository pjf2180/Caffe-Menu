import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SideMenuModule } from './componentModules/side-menu/side-menu.module';
import { MenuModule } from './componentModules/menu/menu.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageFavoritesModule } from '../pageModules/image-favorites/image-favorites.module';
import { ImageViewerModule } from '../pageModules/image-viewer/image-viewer.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    SideMenuModule,
    MenuModule,
    // Eager loading modules
    ImageViewerModule,
    ImageFavoritesModule
  ],
  exports: [ DashboardComponent]
})
export class DashboardModule { }
