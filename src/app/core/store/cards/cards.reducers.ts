import { Action, createReducer, on } from '@ngrx/store';
import { CardsState, initialCardsState } from './cards.state';
import * as CardsPageActions from './cards.actions';

const cardsReducer = createReducer(
	initialCardsState,
	on(CardsPageActions.searchName, (state, { nameFilter }) => ({
		...state,
		total: null,
		paging: { ...state.paging, page: 1 },
		cards: [],
		searchName: nameFilter
	})),
	on(CardsPageActions.getCards, (state) => ({
		...state,
		isLoading: true,
		error: null
	})),
	on(CardsPageActions.getCardsSuccess, (state, { cardData }) => ({
		...state,
		cards: [...state.cards, ...cardData.cards],
		total: cardData.total,
		isLoading: false
	})),
	on(CardsPageActions.getCardsFailed, (state, { error }) => ({
		...state,
		isLoading: false,
		error: error.message,
		paging: { ...state.paging, page: (state.paging.page - 1) || 1 }
	})),
	on(CardsPageActions.incrementPage, (state) => ({
		...state,
		paging: { ...state.paging, page: (state.paging.page + 1) }
	}))
);

export function reducer(state: CardsState | undefined, action: Action) {
	return cardsReducer(state, action);
}
