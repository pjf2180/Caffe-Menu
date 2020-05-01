import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  @Input() rating: number = 0;
  @Input() enabled: boolean = true;

  stars: number[] = [1, 2, 3, 4, 5]
  constructor() { }

  ngOnInit() {

  }
  starClicked(index) {
    if(!this.enabled){
      console.log('Not enabled')
      return
    }
    else{
      if (index + 1 === this.rating) {
        this.rating = 0
      }else{
        this.rating = index + 1;
      }
    }
  }

}
