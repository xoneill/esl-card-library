import { CardFullInfo } from './card-full-info';

export interface CardsResponse {
	cards: CardFullInfo[];
	_links: any;
	_pageSize: number;
	_totalCount: number;
}
