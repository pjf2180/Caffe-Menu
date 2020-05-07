import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    ProductCardComponent,
    NewProductComponent,
    AdminProductsListComponent,
    EditProductComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ItemCardComponent, 
    ProductCardComponent, 
    NewProductComponent,
    AdminProductsListComponent]
})
export class ComponentsModule { }
