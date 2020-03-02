import { Component, Input } from '@angular/core';
import { CardInfo } from '../../../../business/cards/dto/card-info';

@Component({
	selector: 'cards-grid-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
	@Input() card: CardInfo;

	constructor() {
	}
}
