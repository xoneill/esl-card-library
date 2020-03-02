import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'cards-status',
	templateUrl: './cards-status.component.html',
	styleUrls: ['./cards-status.component.scss']
})
export class CardsStatusComponent {
	@Input() total: number;
	@Input() nameFilter: string;

	@Output() resetSearch: EventEmitter<void> = new EventEmitter();

	reset() {
		this.resetSearch.emit();
	}
}
