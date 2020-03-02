import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { CardInfo } from '../../../business/cards/dto/card-info';

@Component({
	selector: 'cards-grid',
	templateUrl: './cards-grid.component.html',
	styleUrls: ['./cards-grid.component.scss']
})
export class CardsGridComponent {
	@Input() cards: CardInfo[];
	@Output() public scrollChange: EventEmitter<void> = new EventEmitter();

	constructor() {
	}

	@HostListener('window:scroll', []) onWindowScroll() {
		if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 250) {
			this.scrollChange.emit();
		}
	}

	public cardsTrackFn: (i: number, card: CardInfo) => string = (i, card) => card.id;
}
