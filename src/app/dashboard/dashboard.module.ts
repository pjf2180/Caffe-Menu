import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
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
    MenuModule,
    // Eager loading modules
    ImageViewerModule,
    TasksModule
  ],
  exports: [ DashboardComponent]
})
export class DashboardModule { }
