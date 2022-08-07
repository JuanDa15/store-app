import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[ProductsQuantityLimiter]'
})
export class ProductsQuantityLimiterDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event'])
  onChangeValue(event: InputEvent) {
    if ( this._el.nativeElement.value > 10) {
      this._el.nativeElement.value = 10;
    }
    if ( this._el.nativeElement.value < 0) {
      this._el.nativeElement.value = 0;
    }
  }
}
