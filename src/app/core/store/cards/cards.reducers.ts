import { CardsState, initialCardsState } from './cards.state';
import { CardsActions, CardsActionType } from './cards.actions';

export function cardsReducers(state: CardsState = initialCardsState, action: CardsActions): CardsState {
	switch (action.type) {
		case CardsActionType.SearchName: {
			return {
				...state,
				total: null,
				paging: {...state.paging, page: 1},
				cards: [],
				searchName: action.payload
			};
		}
		case CardsActionType.GetCards: {
			return {
				...state,
				isLoading: true,
				error: null
			};
		}
		case CardsActionType.GetCardsSuccess: {
			return {
				...state,
				cards: [...state.cards, ...action.payload.cards],
				total: action.payload.total,
				isLoading: false
			};
		}
		case CardsActionType.GetCardsFailed: {
			return {
				...state,
				isLoading: false,
				error: action.payload.message,
				paging: {...state.paging, page: --state.paging.page || 1}
			};
		}
		case CardsActionType.IncrementPage: {
			return {
				...state,
				paging: {...state.paging, page: ++state.paging.page}
			};
		}
		default:
			return state;
	}
}
