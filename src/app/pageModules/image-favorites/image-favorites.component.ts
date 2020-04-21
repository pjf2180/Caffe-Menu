import { Component, OnInit } from '@angular/core';
import { ItemCardVm } from '../image-viewer/item-card/item-card-Vm';

@Component({
  selector: 'app-image-favorites',
  templateUrl: './image-favorites.component.html',
  styleUrls: ['./image-favorites.component.css']
})
export class ImageFavoritesComponent implements OnInit {

  viewModel: ItemCardVm;

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
      stockQty: 3
    }
  }

}
