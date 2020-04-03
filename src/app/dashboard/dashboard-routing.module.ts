import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageViewerComponent } from '../pageModules/image-viewer/image-viewer.component';
import { ImageFavoritesComponent } from '../pageModules/image-favorites/image-favorites.component';
import { DashboardComponent } from './dashboard.component';


const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'imageFinder', component: ImageViewerComponent },
      { path: 'imageFavorites', component: ImageFavoritesComponent },
      { path: '', redirectTo: 'imageFinder', pathMatch: 'full' }
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
