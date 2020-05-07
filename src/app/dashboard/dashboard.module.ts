import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SideMenuModule } from './dashboard-components/side-menu/side-menu.module';
import { MenuModule } from './dashboard-components/menu/menu.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ImageViewerModule } from '../pageModules/shopping-products/image-viewer.module';
import { SharedModule } from '../shared/shared.module';
import { TasksModule } from '../pageModules/tasks/tasks.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    SideMenuModule,
    MenuModule,
    // Eager loading modules
    ImageViewerModule,
    TasksModule
  ],
  exports: [ DashboardComponent]
})
export class DashboardModule { }
