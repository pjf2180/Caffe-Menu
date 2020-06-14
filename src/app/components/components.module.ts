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
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselItemComponent } from './carousel/carousel-item/carousel-item.component';
import { SalesSummaryComponent } from './sales-summary/sales-summary.component';
import { GoalComponent } from './goal/goal.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CategoryOverviewComponent } from './category-overview/category-overview.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { CartComponent } from './cart/cart.component';
import { RoundImageComponent } from './round-image/round-image.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';


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
    ImageThumbnailComponent,
    CarouselComponent,
    CarouselItemComponent,
    SalesSummaryComponent,
    GoalComponent,
    AddStockComponent,
    ProductMenuComponent,
    NavBarComponent,
    CategoriesComponent,
    ProductDetailComponent,
    CategoryOverviewComponent,
    SideMenuComponent,
    SignInComponent,
    RegisterComponent,
    SearchBarComponent,
    CartComponent,
    RoundImageComponent,
    CartItemComponent,
    CartIconComponent

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
    IndicatorComponent,
    SalesSummaryComponent,
    NavBarComponent,
    SideMenuComponent,
    CartComponent,
    RoundImageComponent,
    CartItemComponent
  ]
})
export class ComponentsModule { }
