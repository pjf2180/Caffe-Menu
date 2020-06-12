import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-round-image',
  templateUrl: './round-image.component.html',
  styleUrls: ['./round-image.component.css']
})
export class RoundImageComponent implements OnInit {

  @Input() imgSource: string = '';
  @Input() height: number = 0;
  @Input() width: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
