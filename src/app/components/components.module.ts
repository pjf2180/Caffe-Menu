import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from './item-card/item-card.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ItemCardComponent, ProductCardComponent],
  imports: [
    SharedModule
  ],
  exports: [ItemCardComponent, ProductCardComponent]
})
export class ComponentsModule { }
