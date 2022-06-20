import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[NoDblClick]'
})
export class NoDblClickDirective {

    constructor(private _el: ElementRef) { }
  
    @HostListener('click', ['$event'])
    clickEvent(event: Event) {
        let button = this._el.nativeElement;
        button = button.querySelector('button') === null ? button : button.querySelector('button');
        button.setAttribute('disabled', 'true');
        setTimeout(function(){ 
            button.removeAttribute('disabled');
        }, 1500);
    }

}