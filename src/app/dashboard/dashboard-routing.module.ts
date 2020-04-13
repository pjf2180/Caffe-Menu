import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from '../pageModules/image-viewer/image-viewer.component';
import { ImageFavoritesComponent } from '../pageModules/image-favorites/image-favorites.component';
import { DashboardComponent } from './dashboard.component';

export const main_path = 'dashboard'
export const imageFinderPath = 'imageViewer';
export const imageFavoritesPath = 'imageFavorites';

const routes: Routes = [
  {
    path: main_path, component: DashboardComponent,
    children: [
      { path: imageFinderPath, component: ImageViewerComponent },
      { path: imageFavoritesPath, component: ImageFavoritesComponent },
      { path: '', redirectTo: imageFinderPath, pathMatch: 'full' }
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
