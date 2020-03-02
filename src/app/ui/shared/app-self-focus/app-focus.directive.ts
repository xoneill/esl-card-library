import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appSelfFocus]'
})
export class AppFocusDirective implements OnChanges {
	@Input('appSelfFocus') isFocused: boolean;

	constructor(private el: ElementRef) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.isFocused) {
			this.el.nativeElement.focus();
		}
	}
}
