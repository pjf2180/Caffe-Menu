import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IAdminProduct } from 'src/app/models/admin-product.models';
import { AddStockRequest } from '../admin-products-list/admin-products-list.component';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {

  constructor(
    public dialogRef: MatDialogRef<AddStockComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddStockRequest) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
