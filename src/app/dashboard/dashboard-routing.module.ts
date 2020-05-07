import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from '../pageModules/shopping-products/image-viewer.component';
import { DashboardComponent } from './dashboard.component';
import { TasksComponent } from '../pageModules/tasks/tasks.component';


export const main_path = ''
export const imageFinderPath = 'imageViewer';
export const imageFavoritesPath = 'adminProducts';
export const tasksPath = 'tasks';

const routes: Routes = [
  {
    path: main_path, component: DashboardComponent,
    children: [
      { path: tasksPath, component: TasksComponent, },
      { path: imageFinderPath, component: ImageViewerComponent },
      { path: imageFavoritesPath, loadChildren: () => 
        import('../pageModules/admin-products/admin-products.module').then(m => m.AdminProductsModule) 
      },
      { path: '', redirectTo: imageFavoritesPath, pathMatch: 'full' }
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
