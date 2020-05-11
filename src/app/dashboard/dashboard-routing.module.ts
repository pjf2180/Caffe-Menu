import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from '../pageModules/shopping-products/image-viewer.component';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from '../pageModules/tasks/tasks.component';


export const main_path = ''
export const imageFinderPath = 'imageViewer';
export const adminProductsPath = 'adminProducts';
export const overviewPath = 'overview';

const routes: Routes = [
  {
    path: main_path, component: DashboardComponent,
    children: [
      { path: overviewPath, component: TasksComponent, },
      { path: adminProductsPath, loadChildren: () => 
        import('../pageModules/admin-products/admin-products.module').then(m => m.AdminProductsModule) 
      },
      { path: '', redirectTo: adminProductsPath, pathMatch: 'full' }
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
