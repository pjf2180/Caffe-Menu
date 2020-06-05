import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { Router } from '@angular/router';
import { adminProductsPath } from 'src/app/dashboard/dashboard-routing.module';
import { MatDialog } from '@angular/material/dialog';
import { AddStockComponent } from '../add-stock/add-stock.component';

export interface AddStockRequest {
  product: IAdminProduct;
  stockToAdd?: number;
}
@Component({
  selector: 'app-admin-products-list',
  templateUrl: './admin-products-list.component.html',
  styleUrls: ['./admin-products-list.component.css']
})
export class AdminProductsListComponent implements OnInit {

  products$: Observable<IAdminProduct[]>;
  firstProduct: IAdminProduct;
  constructor(public dialog: MatDialog, private adminProductService: AdminProductService, private router: Router) { }

  ngOnInit() {
    console.log('On init')
    this.products$ = this.adminProductService.getAdminProducts();
  }

  openStockDialog(addStockRequest) {

    const dialogRef = this.dialog.open(AddStockComponent, {
      width: '250px',
      data: addStockRequest
    });
    return dialogRef.afterClosed().toPromise();
  }

  onAddClick() {
    this.router.navigate([adminProductsPath, 'new'])
  }
  addStockQty(product: IAdminProduct) {
    const addStockRequest: AddStockRequest = {
      product
    };

    this.openStockDialog(addStockRequest)
      .then(result => {
        const dialogResult: AddStockRequest = result;
        console.log(dialogResult);
        if (dialogResult) {
          this.adminProductService.addStockToProduct(dialogResult.product.id, dialogResult.stockToAdd)
            .then(() => console.log('succes adding stock')).catch(e => console.log(e));
        }
      });
  }
  togleActive(event) {
    this.adminProductService.togleActiveProp(event)
      .then(() => console.log('Toggle succesful'))
      .catch(e => console.error(e));
  }
  edit(event) {
    console.log(event)
    this.router.navigate([adminProductsPath, 'edit', event])
  }


}
