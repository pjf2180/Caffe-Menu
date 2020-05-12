import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.css']
})
export class ImageThumbnailComponent implements OnInit {

  @Input() imageUrl:string = 'https://source.unsplash.com/random';

  url_val:string;

  constructor() { }

  ngOnInit() {
    this.url_val = `url("${this.imageUrl }")`

    console.log(this.url_val);
  }

}
