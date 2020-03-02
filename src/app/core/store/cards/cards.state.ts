import { CardInfo } from '../../../business/cards/dto/card-info';

export interface CardsState {
	cards: CardInfo[];
	total: number;
	searchName: string;
	isLoading: boolean;
	error: string;
	paging: CardsPagingParams;
}

export interface CardsPagingParams {
	page: number;
	pageSize: number;
}

export const initialCardsState: CardsState = {
	cards: [],
	total: null,
	searchName: null,
	isLoading: false,
	error: null,
	paging: {
		page: 1,
		pageSize: 20
	}
};
