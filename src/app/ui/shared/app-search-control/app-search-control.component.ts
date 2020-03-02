import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-search-control',
	templateUrl: './app-search-control.component.html',
	styleUrls: ['./app-search-control.component.scss']
})
export class AppSearchControlComponent {
	@Input() isFocused: boolean;
	@Input() value: string;

	@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

	search(): void {
		this.valueChange.next(this.value);
	}

	blur(event): void {
		event.target.blur();
	}
}
