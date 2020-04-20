import { Component, OnInit, Input, ContentChild, HostBinding } from '@angular/core';
import { InputRefDirective } from './input-ref-directive.directive'
@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.css']
})
export class FaInputComponent implements OnInit {

  @Input() icon: string;

  @ContentChild(InputRefDirective,{ static:false})
  input: InputRefDirective;

  constructor() { }

  ngOnInit() {
  }
  
  @HostBinding('class.focus')
  get focus() {
    if(this.input){
    }
    return this.input ? this.input.focus : false;
  }

  get classes() {
    const cssClasses = {
      fa: true
    };
    cssClasses['fa-' + this.icon] = true;
    return cssClasses;
  }

}
