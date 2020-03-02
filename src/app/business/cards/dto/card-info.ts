import { CardType } from './card-full-info';

export interface CardInfo {
	id: string;
	name: string;
	text: string;
	setName: string;
	type: CardType;
	imageUrl: string;
}
