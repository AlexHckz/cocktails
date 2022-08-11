import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('click', ['$event']) private surligne(e: MouseEvent) {
    this.el.nativeElement.style.backgroundColor = 'red';
  }

  constructor(private el: ElementRef<HTMLLIElement>) {}
}
