import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.css']
})
export class IndicatorComponent implements OnInit {

  @Input()label:string = 'Label';
  @Input()score: number = 100;
  constructor() { }

  ngOnInit() {
  }

}
