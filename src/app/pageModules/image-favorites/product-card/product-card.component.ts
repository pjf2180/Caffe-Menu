import { Component, OnInit, Input } from '@angular/core';
import { ProductVm } from './productVm';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() id: string;
  viewModel: ProductVm;
  constructor() { }

  ngOnInit() {
    this.viewModel = {
      id: 'Fake-UUID',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      note: 'Dog Breed',
      imageUrl: 'https://source.unsplash.com/random',
      name: 'Shiba Inu',
      price: '650',
      rating: 4.5,
      stockQty: 3,
      available: true,
      lastSaleDate: 0,
      soldInCurrentMonth: 20,
      soldInYear: 125
    }
  }

}
