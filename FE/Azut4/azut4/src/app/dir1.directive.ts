import { Directive, ElementRef } from '@angular/core';
//import { Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDir1]'
})
export class Dir1Directive {

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'gray';
   }

}
