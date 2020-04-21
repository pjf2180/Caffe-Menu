import { Component, OnInit } from '@angular/core';
import { ItemCardVm } from './item-card-Vm';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  viewModel: ItemCardVm;

  constructor() { }

  ngOnInit() {
    this.viewModel = {
      id: 'Fake-UUID',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      note: 'Dog Breed',
      imageUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      name: 'Shiba Inu',
      price: '650',
      rating: 4.5,
      stockQty: 3
    }
  }

}
