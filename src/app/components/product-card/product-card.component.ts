import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IAdminProduct } from 'src/app/models/admin-product.models';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {


  @Input('item') viewModel: IAdminProduct;
  @Output() onStockAdded: EventEmitter<IAdminProduct> = new EventEmitter< IAdminProduct >();
  @Output('activeTogle') onTogleActiveProp: EventEmitter<string> = new EventEmitter<string>();
  @Output() onEdit: EventEmitter<string> = new EventEmitter<string>();
  colorHierarchy = ['primary', 'accent']

  constructor() { }

  ngOnInit() {
    
  }

  getColor(i: number) {
    return i > 1 ? this.colorHierarchy[i] : ''
  }
  
  onAddStockClick() {
    this.onStockAdded.emit({...this.viewModel});
  }
  onTogleActive() {
    this.onTogleActiveProp.emit(this.viewModel.id)
  }
  onEditClick() {
    console.log('Hello world')
    this.onEdit.emit(this.viewModel.id)
  }

}
