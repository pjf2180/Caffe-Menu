import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminProductService } from 'src/app/services/admin-product.service';
import { ShoppingProduct } from 'src/app/models/shopping-product';
import { ShoppingProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  formGroup: FormGroup;
  attributeInsert: FormControl;


  categories: Observable<Food[]>;

  constructor(
    private location: Location,
    private adminProductService: AdminProductService,
    public shoppingProductsService: ShoppingProductService) {
    this.attributeInsert = new FormControl('');

    this.formGroup = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      note: new FormControl(''),
      description: new FormControl(''),
      category: new FormControl(''),
      attributes: new FormControl([])
    })
  }

  ngOnInit() {
    console.log('On init')
    this.categories = this.shoppingProductsService.getProductCategories()
      .pipe(
        map((results) => {
          return results.map((item):Food=>{
            console.log(item)
            return {
              value: item.id,
              viewValue: item.name
            }
          })
        }));
  }

  onBackClick() {
    this.location.back()
  }

  onAddAttribute(attribute: string) {
    if (attribute === '') {
      return
    }
    const currentAttributes = this.addedAttributes();
    console.log(currentAttributes);
    this.formGroup.get(['attributes']).setValue([...currentAttributes, attribute]);
    this.attributeInsert.setValue('')
  }
  removeAttr(attr: number) {
    let attributes = this.addedAttributes();
    attributes.splice(attr, 1);
    this.formGroup.get(['attributes']).setValue(attributes);
  }
  addedAttributes() {
    const attributesFormGrp = this.formGroup.get(['attributes']);
    const attributes = attributesFormGrp.value;
    const attributesArr = Object.values(attributes)
    return attributesArr;
  }

  onSubmit() {
    console.log('Form: ', this.formGroup.value);
    const shoppingProduct: ShoppingProduct = ({ ...this.formGroup.value })

    this.adminProductService.addAdminProduct(shoppingProduct)
      .then(v => console.log('Product added'))
      .catch(e => console.log(e))
      .finally(() => this.location.back());
  }

}
