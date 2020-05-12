import { NgModule } from '@angular/core';
import { ItemCardComponent } from './item-card/item-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';
import { NewProductComponent } from './new-product/new-product.component';
import { AdminProductsListComponent } from './admin-products-list/admin-products-list.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { BestSellersComponent } from './best-sellers/best-sellers.component';
import { ProductThumbnailComponent } from './product-thumbnail/product-thumbnail.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { ProductSalesReportComponent } from './product-sales-report/product-sales-report.component';
import { IndicatorComponent } from './indicator/indicator.component';


@NgModule({
  declarations: [
    ItemCardComponent,
    ProductCardComponent,
    NewProductComponent,
    AdminProductsListComponent,
    EditProductComponent,
    BestSellersComponent,
    ProductThumbnailComponent,
    SalesReportComponent,
    ProductSalesReportComponent,
    IndicatorComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ItemCardComponent, 
    ProductCardComponent, 
    NewProductComponent,
    AdminProductsListComponent,
    BestSellersComponent,
    SalesReportComponent,
    IndicatorComponent
  ]
})
export class ComponentsModule { }
