import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CardsState } from './cards.state';

const cardsState = (state: AppState) => state.cards;

export const selectCards = createSelector(
	cardsState,
	(state: CardsState) => state.cards
);

export const selectTotal = createSelector(
	cardsState,
	(state: CardsState) => state.total
);

export const selectShowMore = createSelector(
	cardsState,
	(state: CardsState) => !state.isLoading && state.cards.length < state.total
);

export const selectSearchName = createSelector(
	cardsState,
	(state: CardsState) => state.searchName
);

export const selectPaging = createSelector(
	cardsState,
	(state: CardsState) => state.paging
);

export const selectIsLoading = createSelector(
	cardsState,
	(state: CardsState) => state.isLoading
);

export const selectError = createSelector(
	cardsState,
	(state: CardsState) => state.error
);
