import { NgModule } from '@angular/core';
import { AdminProductsRouting } from './admin-products.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AdminProductsComponent } from './admin-products.component';



@NgModule({
  declarations: [AdminProductsComponent],
  imports: [
    AdminProductsRouting,
    SharedModule,
    ComponentsModule,
  ]
})
export class AdminProductsModule { }
