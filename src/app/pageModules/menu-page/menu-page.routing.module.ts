import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuPageComponent } from './menu-page.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { ProductDetailComponent } from 'src/app/components/product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '', component: MenuPageComponent,
    children: [
      { path: '', component: CategoriesComponent },
      { path: ':itemId', component: ProductDetailComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MenuPageRoutingModule { }
