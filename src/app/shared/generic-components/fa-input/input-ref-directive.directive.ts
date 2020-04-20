import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[inputRef]'
})
export class InputRefDirective {
  focus = false
  
  constructor(private el: ElementRef) {
  }

  @HostListener('focus')
  onFocus() {
    this.focus = true;
    
  }

  @HostListener('blur')
  onBlur() {
    this.focus = false;
  }

}
