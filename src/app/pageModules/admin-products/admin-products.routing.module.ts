import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from 'src/app/components/new-product/new-product.component';
import { AdminProductsListComponent } from 'src/app/components/admin-products-list/admin-products-list.component';
import { AdminProductsComponent } from './admin-products.component';
import { EditProductComponent } from 'src/app/components/edit-product/edit-product.component';

const routes: Routes = [

  {
    path: '', component: AdminProductsComponent,
    children: [
      { path: 'list', component: AdminProductsListComponent },
      { path: 'new', component: NewProductComponent },
      { path: 'edit/:id', component: EditProductComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminProductsRouting { }
